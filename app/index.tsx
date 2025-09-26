import { useAuth } from "@/context/AuthContext";
import { Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function RootIndex() {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (user) {
        return <Redirect href="/(protected)" />;
    }

    return <Redirect href="/login" />;
}

