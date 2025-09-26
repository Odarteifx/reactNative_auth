import { useAuth } from "@/context/AuthContext";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const { user } = useAuth();
    
    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
                Welcome to AdwumaPro!
            </Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
                You are successfully logged in as: {user?.email}
            </Text>
        </SafeAreaView>
    );
}

