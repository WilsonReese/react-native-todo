import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardToDo } from "./components/CardToDo/CardToDo";

const TODO_LIST = [
  { id: 1, title: "Walk the dog", isCompleted: true },
  { id: 2, title: "Do the dishes", isCompleted: false },
  { id: 3, title: "Clean my room", isCompleted: false },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.app}>
        <View style={s.header}>
          <Header />
        </View>
        <View style={s.body}>
          <CardToDo todo={TODO_LIST[0]} />
        </View>
        <View style={s.footer}>
          <Text></Text>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
