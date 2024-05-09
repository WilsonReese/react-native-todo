import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text style={s.test}>Update!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
