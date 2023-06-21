import React,{ useState } from 'react';
import { StyleSheet, Text, View,FlatList,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';

export default function App() {
  const [todos,setTodos] = useState([
    {text:'Wake Up', key:'1'},
    {text:'Good Morning',key:'2'},
    {text:'Morning Breakfast',key:'3'}
  ]);

  const presshandler = (key)=>{
      setTodos((prevTodos)=>{
        return prevTodos.filter(todo => (todo.key != key))
      })
  }

  const submitHandler= (text)=>{
    if(text.length > 3){
    setTodos((prevTodos) => {
      return [{text:text,key:Math.random().toString() },...prevTodos]
    })
    }
    else{
      Alert.alert('OOPS!','Todos must be over 3 chars long',[{text:'OK',onPress:()=>console.log('alert closed')}]);
    } 
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss(); 
      console.log('dimissed keyboard');
    }}>
    <View style={styles.container}>
    <Header />
    <View style ={styles.content}>
      <AddTodo submitHandler={ submitHandler }/>
      <View style={styles.list}>
        <FlatList 
         data={todos}
         renderItem={({ item })=>(
          <TodoItem item={ item } presshandler={ presshandler } />
        )}
        />
      </View>
    </View>
    
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  }
});
