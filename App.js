import { ScrollView, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardToDo } from "./components/CardToDo/CardToDo";
import { useState } from "react";
import { TabBottomMenu } from "./components/TabBottomMenu/TabBottomMenu";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Walk the dog", isCompleted: true },
    { id: 2, title: "Do the dishes", isCompleted: false },
    { id: 3, title: "Clean my room", isCompleted: false },
    { id: 4, title: "Walk the dog", isCompleted: true },
    { id: 5, title: "Do the dishes", isCompleted: false },
    { id: 6, title: "Clean my room", isCompleted: false },
    { id: 7, title: "Walk the dog", isCompleted: true },
    { id: 8, title: "Do the dishes", isCompleted: false },
    { id: 9, title: "Clean my room", isCompleted: false },
  ]);
  const [selectedTabName, setSelectedTabName] = useState("all")

  function renderTodoList() {
    return todoList.map((todo) => (
      <View key={todo.id} style={s.cardItem}>
        <CardToDo onPress={updateTodo} todo={todo} />
      </View>
    ));
  }

  function updateTodo(todo) {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    const updatedTodoList = todoList.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodoList(updatedTodoList);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.app}>
        <View style={s.header}>
          <Header />
        </View>
        <View style={s.body}>
          <ScrollView>{renderTodoList()}</ScrollView>
        </View>
        <View style={s.footer}>
          <TabBottomMenu selectedTabName={selectedTabName} onPress={setSelectedTabName}/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
