import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.app}>
        <View style={s.header}>
          <Header/>
        </View>
        <View style={s.body}>
          <Text>List</Text>
        </View>
        <View style={s.footer}>
          <Text></Text>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
