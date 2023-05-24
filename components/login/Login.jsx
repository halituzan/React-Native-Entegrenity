import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const navigation = useNavigation();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = login;
  const loginHandler = (key, value) => {
    setLogin({ ...login, [key]: value });
  };
  const loginSender = () => {
    console.log("first");
  };

  return (
    <View className="bg-slate-800 w-screen h-[300px] flex justify-center items-center my-20">
      <Text className="text-white text-2xl font-bold mt-10">Giriş</Text>
      <SafeAreaView className="text-white">
        <TextInput
          value={email}
          onChangeText={(text) => loginHandler("email", text)}
          placeholder="E-posta"
          className="border-2 border-slate-600 bg-white p-2 w-64 rounded-xl mb-2 text-gray-600 font-bold"
        />
        <TextInput
          value={password}
          onChangeText={(text) => loginHandler("password", text)}
          placeholder="Şifre"
          className="border-2 border-slate-600 bg-white p-2 w-64 rounded-xl mb-2 text-gray-600 font-bold"
          secureTextEntry={true}
        />
      </SafeAreaView>
      <View className="flex flex-row justify-center w-full">
        <TouchableHighlight
          className="flex justify-center items-center"
          onPress={loginSender}
        >
          <Text className="text-white text-md bg-orange-600 py-2 px-6 rounded-xl mx-1 flex justify-center items-center">
            Giriş Yap
          </Text>
        </TouchableHighlight>
        <TouchableHighlight className="flex justify-center items-center">
          <Text
            onPress={() => navigation.navigate("Register")}
            className="text-white text-md bg-orange-600 py-2 px-6 rounded-xl mx-1 flex justify-center items-center"
          >
            Kaydol
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
{
  /* <Button
              title="Jane'in Profil Sayfası"
              onPressOut={() => navigation.navigate("Profile", { name: "Jane" })}
            >
              Profil Sayfasına Git
            </Button> */
}