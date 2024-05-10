import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./TabBottomMenu.style";

export function TabBottomMenu({}) {
  return (
    <View style={s.root}>
      <TouchableOpacity>
        <Text>All</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>In Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
