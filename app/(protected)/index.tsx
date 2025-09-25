import { useAuth } from "@/context/AuthContext";
import { Redirect } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
const { user } = useAuth();
  return (
    user ? (
      
    <SafeAreaView>
      <Text>Index</Text>


    </SafeAreaView>
  ) : (
    <Redirect href="/login" />
  ));
}

