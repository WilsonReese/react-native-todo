import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./ButtonAdd.style";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export function ButtonAdd({  }) {
  return (
    <TouchableOpacity style={s.button}>
        <FontAwesome6 name="add" size={20} color="#2F76E5" marginBottom={8} />
        <Text style={s.text}>
            Add Todo
        </Text>
        </TouchableOpacity>
  );
}
