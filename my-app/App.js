import Task from './components/task';
import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
export default function App() {
  const [task,setTask]=useState();
  const [taskItems,setTaskItem]=useState([]);
  const Handlertask = () => {
  setTaskItem([...taskItems , task]); 
    setTask(null);
}
const completeTask = (index) => {
  let itemCopy=[...taskItems];
  itemCopy.splice(index,1);
  setTaskItem(itemCopy);
}
  return (
    <View style={styles.container}>
{/* import some important styles for my project  */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle} > Today's tasks </Text>
      <View style={styles.items}> 
      {
        taskItems.map((item,index)=>{

          return(
            <TouchableOpacity key={index} onPress={()=>completeTask(index)}> 
             <Task text={item}/>
            </TouchableOpacity>
          )
        })

      }
       </View>
     {/* where the task will go !!  */}

     <KeyboardAvoidingView style={styles.writeTaskWrapper} >
     <TextInput style={styles.input}
     placeholder={"write your task"}  value={task} onChangeText={text=>setTask(text)}></TextInput>
     

     <TouchableOpacity onPress={()=>Handlertask()} >
      <View style={styles.addWrapper}>
      <Text style={styles.addText}> + </Text>
      </View>
     </TouchableOpacity>
     </KeyboardAvoidingView>
     </View>
 
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tasksWrapper:{
    paddingTop:80 ,
    paddingHorizontal :20 ,
  },
  sectionTitle : {
    fontSize:24,
    fontWeight: 'bold',
  } , 
  items:{ 
    marginTop:30 ,
  },
  writeTaskWrapper:{
position:"relative",
bottom:0,
width:"100%",
flexDirection: 'row',
justifyContent:"space-around",
alignItems: 'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor: '#ccc',
    borderRadius:60,
    borderWidth:1,
    width:250,
  },
addWrapper:{
width:60,
height:60,
borderRadius:60,
justifyContent:"center",
alignItems: 'center',
borderWidth:1,
backgroundColor: '#ccc',

},

});




