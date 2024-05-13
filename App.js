import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardToDo } from "./components/CardToDo/CardToDo";
import { useEffect, useState } from "react";
import { TabBottomMenu } from "./components/TabBottomMenu/TabBottomMenu";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";
import Dialog from "react-native-dialog";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

let isFirstRender = true;
let isLoadUpdate = false;

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [selectedTabName, setSelectedTabName] = useState("all");
  const [isAddDialogDisplayed, setIsAddDialogDisplayed] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    loadTodoList();
  }, []);

  useEffect(() => {
    if (!isLoadUpdate) {
      if (!isFirstRender) {
        saveTodoList();
      } else {
        isFirstRender = false;
      }
    } else {
      isLoadUpdate = false;
    }
  }, [todoList]);

  async function loadTodoList() {
    console.log("LOAD");
    try {
      const todoListString = await AsyncStorage.getItem("@todoList");
      const parsedTodoList = JSON.parse(todoListString);
      isLoadUpdate = true;
      setTodoList(parsedTodoList || []);
    } catch (err) {
      alert(err);
    }
  }

  async function saveTodoList() {
    console.log("SAVE");
    try {
      await AsyncStorage.setItem("@todoList", JSON.stringify(todoList));
    } catch (err) {
      alert(err);
    }
  }

  function getFilteredList() {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => !todo.isCompleted);
      case "done":
        return todoList.filter((todo) => todo.isCompleted);
    }
  }

  function deleteTodo(todoToDelete) {
    Alert.alert("Delete todo", "Are you sure you want to delete this todo?", [
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          // console.log("Deleted:", todo)
          setTodoList(todoList.filter((todo) => todo !== todoToDelete));
        },
      },
      { text: "Cancel", style: "cancel" },
    ]);
  }

  function renderTodoList() {
    if (todoList.length > 0) {
      return getFilteredList().map((todo) => (
        <View key={todo.id} style={s.cardItem}>
          <CardToDo onLongPress={deleteTodo} onPress={updateTodo} todo={todo} />
        </View>
      ));
    } else {
      return <Text>No items.</Text>;
    }
  }

  function updateTodo(todo) {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    const updatedTodoList = todoList.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodoList(updatedTodoList);
  }

  function addTodo() {
    const newTodo = {
      id: uuid.v4(),
      title: inputValue,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    setIsAddDialogDisplayed(false);
    setInputValue("");
  }

  function renderAddDialog() {
    return (
      <Dialog.Container
        visible={isAddDialogDisplayed}
        onBackdropPress={() => setIsAddDialogDisplayed(false)}
        headerStyle={s.dialogHeader}
      >
        <Dialog.Title>Add todo</Dialog.Title>
        <Dialog.Description>
          Add a description for your todo.
        </Dialog.Description>
        <Dialog.Input
          onChangeText={setInputValue}
          placeholder="Go to the grocery store"
          keyboardType="default"
        />
        <Dialog.Button
          label="Cancel"
          onPress={() => setIsAddDialogDisplayed(false)}
        />
        <Dialog.Button
          disabled={!inputValue}
          label="Add"
          onPress={addTodo}
          bold="true"
        />
      </Dialog.Container>
    );
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView>{renderTodoList()}</ScrollView>
          </View>
          <View style={s.footer}>
            <TabBottomMenu
              todoList={todoList}
              selectedTabName={selectedTabName}
              onPress={setSelectedTabName}
            />
          </View>
          <ButtonAdd onPress={() => setIsAddDialogDisplayed(true)} />
        </SafeAreaView>
      </SafeAreaProvider>
      {renderAddDialog()}
    </>
  );
}
