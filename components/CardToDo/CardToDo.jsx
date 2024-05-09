import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./CardToDo.style";
import { FontAwesome6 } from "@expo/vector-icons";

export function CardToDo({ todo }) {
  return (
    <TouchableOpacity style={s.card}>
      <Text style={s.title}>{todo.title}</Text>
      {todo.isCompleted && (
        <FontAwesome6
          style={s.checkmark}
          name="circle-check"
          size={24}
          color="#449fff"
        />
      )}
    </TouchableOpacity>
  );
}
