import { useAuth } from "@/context/AuthContext";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill in all fields");
            return;
        }
        try {
            await login(email, password);
            Alert.alert("Success", "Logged in successfully");
            router.push("/profile");
        } catch (error: any) {
            Alert.alert("Error", error.message || "Failed to login");
        }
    }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }}>
      <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", margin: 15, padding: 8, borderRadius: 20, }}>
        <Image source={require("../assets/images/Apro.png")} style={{ resizeMode: "contain", width: 70, height: 65, }} />
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Welcome Back!</Text>
      <View style={{ height: 5, }} />
      <Text style={{ fontSize: 16, color: "grey", textAlign: "center" }}>Sign in to your account to continue to your dashboard.</Text>
      <View style={{ height: 20, }} />

      <TextInput 
        placeholder="Email" 
        value={email}
        onChangeText={setEmail}
        inputMode="email"
        style={{ width: "100%", height: 50, borderWidth: 1, borderColor: "lightgray", borderRadius: 10, padding: 10, margin: 5, backgroundColor: "lightgraytransparent" }} 
      />
      <View style={{ height: 4, }} />
      <TextInput 
        placeholder="Password" 
        value={password}
        onChangeText={setPassword}
        style={{ width: "100%", height: 50, borderWidth: 1, borderColor: "lightgray", borderRadius: 10, padding: 10, margin: 5, backgroundColor: "lightgraytransparent", }} 
        secureTextEntry={true}  
      />
      <View style={{ width: "100%", alignItems: "flex-end", }}>
        <Link style={{ textAlign: "right", fontSize: 12, color: "black" }} href={"/login"}>Forgot password?</Link>
      </View>
      <View style={{ height: 10, }} />
      <TouchableOpacity onPress={handleLogin} style={{ width: "100%", height: 50, backgroundColor: "black", borderRadius: 10, margin: 10, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "white", fontSize: 14, }}>Sign In</Text>
      </TouchableOpacity>

      <View style={{ height: 15, }} />
      <Text style={{ fontSize: 14, color: "grey" }}>Or continue with</Text>
      <View style={{ height: 15, }} />
      <TouchableOpacity style={{ width: "100%", height: 50, backgroundColor: "white", borderRadius: 10, padding: 10, margin: 5, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "lightgray" }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <Image source={require("../assets/images/apple-logo.png")} style={{ width: 18, height: 18, marginRight: 5, }} />
          <Text style={{ color: "black", fontSize: 14, }}> Continue with Apple</Text>
        </View>
      </TouchableOpacity>
      <View style={{ height: 5, }} />
      <TouchableOpacity style={{ width: "100%", height: 50, backgroundColor: "black", borderRadius: 10, padding: 10, margin: 5, alignItems: "center", justifyContent: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <Image source={require("../assets/images/google.png")} style={{ width: 16, height: 16, marginRight: 5, }} />
          <Text style={{ color: "white", fontSize: 14, }}> Continue with Google</Text>
        </View>
        
      </TouchableOpacity>
      <View style={{ height: 15, }} />
      <Text style={{ fontSize: 14, color: "grey" }}>Don't have an account? <Link href={"/signup"} style={{ color: "black", fontWeight: "600" }} >Sign up</Link></Text>

    </View>
  );
}