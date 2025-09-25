import { Redirect } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    isLoggedIn ? (  
    <View>
      <Text>Index</Text>
    </View>
  ) : (
    <Redirect href="/login" />
  ));
}

