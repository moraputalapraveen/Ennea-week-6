import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Modal, Alert, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StatusBar } from 'react-native';

export default function App() {
  const [tasks, settasks] = useState([]);
  const [search,setsearch]=useState('')
  const [title, settitle] = useState('');
  const [date, setdate] = useState(new Date());
  const [showdatepicker, setshowdatepicker] = useState(false);
  const [showtimepicker, setshowtimepicker] = useState(false);
  const [modalvisible, setmodalvisible] = useState(false);

  
  const handlesearch = (text) => {
    
    setsearch(text)
  };

 
  const Handleaddtask = () => {
    if (!title) {
      Alert.alert('Error', 'Please enter a title');
      return;
    }

    settasks([...tasks, { id: Date.now(), title, date: date.toLocaleString() }]);
    settitle('');
    setdate(new Date());
    setmodalvisible(false); 
  };

  
  const Datepickerhandler = () => {
    setshowdatepicker(true);
  };

  const Timepickerhandler = () => {
    setshowtimepicker(true);
  };

  const Handledatechange = (event, selectedDate) => {
    if (selectedDate) {
      setdate(selectedDate);
    }
    setshowdatepicker(false);
  };

  const Handletimechange = (event, selectedTime) => {
    if (selectedTime) {
      const currentDate = new Date(date);
      currentDate.setHours(selectedTime.getHours(), selectedTime.getMinutes());
      setdate(currentDate);
    }
    setshowtimepicker(false);
  };


  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()));


  return (
    <View style={styles.container}>
      
      <StatusBar backgroundcolor="green" />
      <Text style={styles.title1}>Your Taks</Text>
      <TextInput
        placeholder="Search Tasks"
        value={search}
        onChangeText={handlesearch}
        style={styles.searchinput}
      />

    
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskcontainer}>
            <Text style={styles.tasktitle}>{item.title}</Text>
            <Text style={styles.taskdate}>{item.date}</Text>
          </View>
        )}
      />

      
      <TouchableOpacity
        style={styles.floatingbutton}
        onPress={() => setmodalvisible(true)}
      >
        <Text style={styles.floatingbuttontext}>+</Text>
      </TouchableOpacity>

    
      <Modal
        visible={modalvisible}
        transparent={true}
        animationType="slide"
      
      >
        <View style={styles.modalcontainer}>
          <View style={styles.modalcontent}>
            <Text style={styles.modaltitle}>Add Task</Text>
           
            <TextInput
              placeholder="Enter Task Title"
              value={title}
              onChangeText={settitle}
              style={styles.input}
            />

            <TouchableOpacity onPress={Datepickerhandler}>
              <Text style={styles.datepickertext}>
                Select Date: {date.toDateString()}
              </Text>
            </TouchableOpacity>

            {showdatepicker && (
              <DateTimePicker
                value={date}
                mode="date"
                onChange={Handledatechange}
              />
            )}

            <TouchableOpacity onPress={Timepickerhandler}>
              <Text style={styles.datepickertext}>
                Select Time: {date.toTimeString()}
              </Text>
            </TouchableOpacity>

            {showtimepicker && (
              <DateTimePicker
                value={date}
                mode="time"
                
                onChange={Handletimechange}
              />
            )}

            <Button title="Add Task" style={styles.modalbutton} onPress={Handleaddtask} />

            <TouchableOpacity onPress={() => setmodalvisible(false)} style={styles.closebutton}>
              <Text style={styles.closebuttontext}>Close</Text>
            </TouchableOpacity>
            
            
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
    backgroundColor: '#f7f4f0',
  },
  title1:
  {
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center'
  },
  modalbutton:{
    marginBottom:20,
    backgroundColor:"blue"
  },
  searchinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  taskcontainer: {
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom:20,
    borderRadius:5,

  },
  tasktitle: {
    fontSize: 16,
  },
  taskdate: {
    fontSize: 14,
    color: 'gray',
  },
  floatingbutton: {
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
  floatingbuttontext: {
    color: '#fff',
    fontSize: 24,
  },
  modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalcontent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modaltitle: {
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
  datepickertext: {
    marginBottom: 10,
    color: '#1E90FF',
    
  },

  closebutton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff6666',
    borderRadius: 5,
    alignItems: 'center',
  },
  closebuttontext: {
    color: '#fff',
    fontSize: 16,
  },
});
