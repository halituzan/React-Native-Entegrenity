import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DashboardNavbar from "./DashboardNavbar";
export default function Dashboard() {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Ürünler",
      icon: (
        <MaterialCommunityIcons name="inbox-full" size={64} color="#ea580c" />
      ),
      route: "Products",
    },
    {
      id: 2,
      title: "Ürün Grupları",
      icon: (
        <MaterialCommunityIcons name="view-grid" size={64} color="#ea580c" />
      ),
      route: "ProductGroup",
    },
    {
      id: 3,
      title: "Ürün Grubu Oluştur",
      icon: (
        <MaterialCommunityIcons
          name="view-grid-plus"
          size={64}
          color="#ea580c"
        />
      ),
      route: "CreateProductGroup",
    },
    {
      id: 4,
      title: "Genel Ayarlar",
      icon: <MaterialIcons name="settings" size={64} color="#ea580c" />,
      route: "settings",
    },
    {
      id: 5,
      title: "Mağaza Ayarları",
      icon: (
        <MaterialCommunityIcons
          name="store-settings"
          size={64}
          color="#ea580c"
        />
      ),
      route: "MerchantSettings",
    },
    {
      id: 6,
      title: "İletişim",
      icon: (
        <MaterialCommunityIcons
          name="phone-in-talk"
          size={64}
          color="#ea580c"
        />
      ),
      route: "Contact",
    },
  ]);


  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-slate-800 ">
      <View className="flex flex-col justify-between content-between items-center w-full ">
        <View className="w-full z-50">
          <DashboardNavbar />
        </View>
        <View
          className="w-full p-5 pl-0"
          // style={styles.scrollView}
          // showsVerticalScrollIndicator={false}
        >
          <View className="flex flex-row  justify-evenly items-center flex-wrap w-full">
            {sections?.map((section) => {
              return (
                <View
                  key={section.id}
                  className="w-32 h-32 bg-white m-2 ml-0 relative flex justify-center items-center"
                >
                  <View className="w-full h-full flex flex-row justify-center items-start pt-5">
                    {section.icon}
                  </View>
                  <View className="absolute bottom-0 w-full bg-slate-600 h-8 flex justify-center items-center">
                    <Text className="text-white font-medium flex justify-center items-center">
                      {section.title}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <StatusBar style="auto" backgroundColor="#475569" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   scrollView:{
//     flex: 1,
//     justifyContent:"center"
//   }
// })
