import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, TextInput, ToastAndroid, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { checkUser, loginController } from "../../crudhelpers/auth.controller";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen2() {
  const navigation = useNavigation();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = login;
  const loginHandler = (key, value) => {
    setLogin({ ...login, [key]: value });
  };
  const loginSender = async () => {
    try {
      const data = await loginController(email, password);
      const value = data.request._lowerCaseResponseHeaders["set-cookie"];
      const token = value.split("; ")[0].slice(6);
      await AsyncStorage.setItem("@entegrenity:jwt", token);
    } catch (error) {
      console.log(error);
    }
    getAsyncStorage();
  };
  const getAsyncStorage = async () => {
    const value = await AsyncStorage.getItem("@entegrenity:jwt");
    if (value) {
      const data = await checkUser(value);
      console.log(data.status);
      if (data.status === 200) {
        navigation.navigate("Dashboard");
      }
    }
  };
  useEffect(() => {
    getAsyncStorage();
  }, []);

  return (
    <SafeAreaView className="text-white bg-slate-800 h-full">
      <View className="bg-slate-800 w-screen h-[300px] flex justify-center items-center my-20 ">
        <Text className="text-white text-2xl font-bold mt-10">Giriş</Text>

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

        <View className="flex flex-row justify-center w-full">
          <TouchableHighlight className="flex justify-center items-center">
            <Text
              onPress={loginSender}
              className="text-white text-md bg-orange-600 py-2 px-6 rounded-xl mx-1 flex justify-center items-center"
            >
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
    </SafeAreaView>
  );
}

