import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Modal, Alert, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StatusBar } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [search, setSearch] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Handle Search Tasks
  const handleSearch = (text) => {
    setSearch(text);
  };

  // Add Task Function
  const handleAddTask = () => {
    if (!title) {
      Alert.alert('Error', 'Please enter a title');
      return;
    }

    setTasks([...tasks, { id: Date.now(), title, date: date.toLocaleString() }]);
    setTitle('');
    setDate(new Date());
    setModalVisible(false); // Close modal after adding task
  };

  // DatePicker Handler
  const showDatePickerHandler = () => {
    setShowDatePicker(true);
  };

  const showTimePickerHandler = () => {
    setShowTimePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowDatePicker(false);
  };

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      const currentDate = new Date(date);
      currentDate.setHours(selectedTime.getHours(), selectedTime.getMinutes());
      setDate(currentDate);
    }
    setShowTimePicker(false);
  };

  // Filtered Tasks Based on Search Input
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <StatusBar backgroundColor="green"/>
      <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center'}}>Your Taks</Text>
      <TextInput
        placeholder="Search Tasks"
        value={search}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />

      {/* Task List */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskDate}>{item.date}</Text>
          </View>
        )}
      />

      {/* Floating Button to Add Task */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>

      {/* Modal for Adding Task */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Task</Text>
           
            <TextInput
              placeholder="Enter Task Title"
              value={title}
              onChangeText={setTitle}
              style={styles.input}
            />

            <TouchableOpacity onPress={showDatePickerHandler}>
              <Text style={styles.datePickerText}>
                Select Date: {date.toDateString()}
              </Text>
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}

            <TouchableOpacity onPress={showTimePickerHandler}>
              <Text style={styles.datePickerText}>
                Select Time: {date.toLocaleTimeString()}
              </Text>
            </TouchableOpacity>

            {showTimePicker && (
              <DateTimePicker
                value={date}
                mode="time"
                display="default"
                onChange={handleTimeChange}
              />
            )}

            <Button title="Add Task" style={styles.modalbutton} onPress={handleAddTask} />
            
            
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  modalbutton:{
    marginBottom:20,
    backgroundColor:"red"
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  taskTitle: {
    fontSize: 16,
  },
  taskDate: {
    fontSize: 14,
    color: 'gray',
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  datePickerText: {
    marginBottom: 10,
    color: '#1E90FF',
  },
});
