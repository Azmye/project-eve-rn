import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Play Games!', id: '1' },
    { text: 'Order Pizza', id: '2' },
    { text: 'Make a dinner', id: '3' },
  ]);

  const pressHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {
            text: text,
            id: Math.random().toString(),
          },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long!', [{ text: 'Understood', onPress: () => console.log('alert closed') }]);
    }
  };
  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          {/* Todo Form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList data={todos} renderItem={({ item }) => <TodoItem pressHandler={pressHandler} item={item} />} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
    paddingVertical: 10,
  },
});
