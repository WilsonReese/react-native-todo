import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./CardToDo.style";
import { FontAwesome6 } from "@expo/vector-icons";

export function CardToDo({ todo, onPress }) {
  console.log("Todo:", todo);
  return (
    <TouchableOpacity style={s.card} onPress={() => onPress(todo)}>
      <Text
        style={[
          s.title,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
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
