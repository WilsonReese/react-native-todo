import { Image, Text, View } from "react-native";
import { s } from "./Header.style";
import headerImage from "../../assets/logo.png"

export function Header({}) {
  return (
    <View>
      <Image
        style={s.image}
        source={headerImage}
      />
      <Text style={s.subtitle}>You probably have something to do</Text>
    </View>
  );
}
