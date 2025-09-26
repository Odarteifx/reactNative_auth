import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            Alert.alert("Success", "Logged out successfully");
            router.replace("/login");
        } catch (error: any) {
            Alert.alert("Error", error.message || "Failed to logout");
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
                    Profile
                </Text>
                
                {user && (
                    <View style={{ marginBottom: 30, alignItems: "center" }}>
                        <Text style={{ fontSize: 18, marginBottom: 10 }}>
                            Welcome, {user.email}
                        </Text>
                        <Text style={{ fontSize: 14, color: "gray" }}>
                            User ID: {user.uid}
                        </Text>
                    </View>
                )}
                
                <TouchableOpacity 
                    onPress={handleLogout}
                    style={{
                        backgroundColor: "red",
                        paddingHorizontal: 30,
                        paddingVertical: 15,
                        borderRadius: 10,
                        marginTop: 20
                    }}
                >
                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}