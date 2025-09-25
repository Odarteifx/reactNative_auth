import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignupScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }}>
       <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "lightgray", margin: 15, padding: 8, borderRadius: 20, }}>
        <Image source={require("../assets/images/Apro.png")} style={{ resizeMode: "contain", width: 70, height: 65, }} />
      </View>
      <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}> Create an Account </Text>
      <View style={{ height: 5, }} />
      <Text style={{ fontSize: 16, color: "grey", textAlign: "center" }}>Join AdwumaPro and start your journey to success.</Text>
      <View style={{ height: 15, }} />

      <TextInput placeholder="Full Name" inputMode="text" style={{ width: "100%", height: 50, borderWidth: 1, borderColor: "lightgray", borderRadius: 10, padding: 10, margin: 5, backgroundColor: "lightgraytransparent" }} />
      <View style={{ height: 2, }} />
      <TextInput placeholder="Email" inputMode="email" style={{ width: "100%", height: 50, borderWidth: 1, borderColor: "lightgray", borderRadius: 10, padding: 10, margin: 5, backgroundColor: "lightgraytransparent" }} />
      <View style={{ height: 2, }} />
      <TextInput placeholder="Password" inputMode="text" style={{ width: "100%", height: 50, borderWidth: 1, borderColor: "lightgray", borderRadius: 10, padding: 10, margin: 5, backgroundColor: "lightgraytransparent", }} secureTextEntry={true}  />
      <View style={{ height: 2, }} />
      <TextInput placeholder="Confirm Password" inputMode="text" style={{ width: "100%", height: 50, borderWidth: 1, borderColor: "lightgray", borderRadius: 10, padding: 10, margin: 5, backgroundColor: "lightgraytransparent", }} secureTextEntry={true}  />
      <View style={{ height: 2, }} />
      <View style={{ width: "100%", alignItems: "flex-end", }}>

      </View>
      <View style={{ height: 10, }} />
      <TouchableOpacity style={{ width: "100%", height: 50, backgroundColor: "black", borderRadius: 10, margin: 10, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "white", fontSize: 14, }}>Create Account</Text>
      </TouchableOpacity>
      <View style={{ height: 2, }} />
      <Text style={{ fontSize: 13, textAlign: "center", color: "grey" }}>By continuing, you agree to AdwumaHub's Terms and Usage Policy, and acknowledge their Privacy Policy</Text>
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
      <Text style={{ fontSize: 14, color: "grey" }}>Already have an account? <Link href={"/login"} style={{ color: "black", fontWeight: "600" }} >Sign In</Link></Text>

    </View>
  );
}