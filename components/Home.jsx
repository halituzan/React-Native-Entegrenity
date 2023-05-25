import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Card from "./Card";
import { Svg, Path, G } from "react-native-svg";
import { StyleSheet } from "react-native";
import Login from "./login/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkUser } from "../crudhelpers/auth.controller";
import LoadingScreen from "./LoadingScreen";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const [pagination, setPagination] = useState(1);
  const [doHaveToken, setDoHaveToken] = useState(true);
  const scrollViewRef = useRef(null);

  const handleScroll = async (event) => {
    const viewWidth = event.nativeEvent.layoutMeasurement.width;
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentPage = Math.floor(contentOffsetX / viewWidth) + 1;
    setPagination(currentPage);
  };

  const getAsyncStorage = async () => {
    const value = await AsyncStorage.getItem("@entegrenity:jwt");
    if (value) {
      setDoHaveToken(true);
      const data = await checkUser(value);
      if (data.status === 200) {
        navigation.navigate("Dashboard");
      }
    } else {
      navigation.navigate("Home");
    }
    return value;
  };
  useEffect(() => {
    getAsyncStorage();
  }, []);
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-800 pt-2">
      {doHaveToken ? (
        <View className="flex flex-col justify-between content-between items-center w-full">
          <View className="w-64 h-16">
            <Svg
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 4934.8 1241.4"
              className="text-3xl font-bold sm:text-4xl"
            >
              <Path
                className="fill-[#EA580C] pth-1"
                d="M468.2,386.2c32.9,32.9,81.2,40.8,121.6,23.9c-9.4-20.7-14-42.4-14-65.3c0-35.5,9.7-70.4,29.2-104.6
	c19.5-34.2,46.5-62,81-83.5c5.1-3.2,10.2-6.1,15.4-8.8l-76-76c-43.4-43.4-113.8-43.4-157.1,0l-78.6,78.6
	c-43.4,43.4-43.4,113.8,0,157.1L468.2,386.2z"
              />
              <Path
                className="fill-[#EA580C] pth-2"
                d="M496.3,862.6c-31.8-34.2-47.7-77.2-47.7-129.2c0-4.6,0.1-9.1,0.4-13.7l-59.3,59.3
	c-43.4,43.4-43.4,113.8,0,157.1l78.6,78.6c43.4,43.4,113.8,43.4,157.1,0l78.6-78.6c10.4-10.4,18.3-22.4,23.7-35.2
	c-29.2,8.5-59.4,12.8-90.4,12.8C575.1,913.8,528.1,896.7,496.3,862.6z"
              />
              <Path
                className="fill-[#EA580C] pth-3"
                d="M389.7,464.8l-78.6-78.6c-43.4-43.4-113.8-43.4-157.1,0l-78.6,78.6C32,508.2,32,578.5,75.4,621.9l78.6,78.6
	c43.4,43.4,113.8,43.4,157.1,0l78.6-78.6C433.1,578.5,433.1,508.2,389.7,464.8z"
              />
              <G>
                <Path
                  className="fill-white pth-4"
                  d="M2941.1,404.2c-12.3-14.6-29-21.9-50.3-21.9c-21.2,0-41,5.3-59.2,15.9c-18.3,10.6-38.7,25.9-61.2,45.8
		l12.9-61.7H2640l-67.9,320.1c-13.2,41.5-29.4,72.9-48.6,94c-19.3,21.2-44.8,37.2-76.6,47.8l98.5-461.8h-143.3l-10.9,51.8v-6
		c0-15.3-6.6-27.5-19.9-36.8c-13.3-9.3-33.5-13.9-60.7-13.9c-53.7,0-100,18.8-138.9,56.2c-38.8,37.5-68,83.3-87.6,137.4
		c-18.2,50.4-28,98.6-29.2,144.7c-25.6,27-49.4,47.6-71.3,61.8c-25.6,16.6-56.2,24.9-92.1,24.9c-25.2,0-43.5-5.8-54.7-17.4
		c-11.3-11.6-16.9-33.7-16.9-66.2c0-6.6,0.7-19.9,2-39.8c39.8-2.6,77.3-13.4,112.5-32.3c35.2-18.9,63.4-44,84.6-75.1
		c21.2-31.2,31.9-65.4,31.9-102.5c0-63.7-36.5-95.6-109.5-95.6c-62.4,0-113.8,20.1-154.3,60.2c-40.5,40.2-69.7,87.8-87.6,142.8
		c-17.9,55.1-26.9,105.5-26.9,151.3c0,2.2,0,4.3,0.1,6.5c-6.3,11.7-13.9,22-23,30.9c-16.6,16.3-34.5,24.4-53.7,24.4
		c-14.6,0-25.1-2.8-31.4-8.5c-6.3-5.6-9.5-15.1-9.5-28.4c0-11.3,1.3-21.9,4-31.9l63.7-298.6h59.7l8-39.8h-59.7l33.8-157.3
		L1517.3,245l-29.9,137.4h-32.8l-8,39.8h32.8l-59.7,279.7c0,0,0,0,0,0c-11.9,29.8-23.9,51.9-35.8,66.1
		c-11.9,14.3-27.9,21.4-47.8,21.4c-14.6,0-24.9-3.6-30.9-10.9c-6-7.3-9-17.6-9-30.9c0-11.3,2.1-26.7,6.5-46.3
		c4.3-19.6,9.1-39.6,14.4-60.2c8.6-33.8,15.3-62.5,19.9-86.1c4.6-23.5,7-44.9,7-64.2c0-37.8-10-66-29.9-84.6
		c-19.9-18.6-46.8-27.9-80.6-27.9c-44.5,0-83.3,18.6-116.5,55.7l10.9-51.8H984.8l-68.6,323.5c-17.3,28.9-43,51.9-77.2,69.2
		c-36.2,18.3-70.8,27.4-104,27.4c-31.9,0-55.6-9.3-71.2-27.9c-15.6-18.6-23.4-42.8-23.4-72.7c0-31.2,7.6-63.9,22.9-98
		c15.3-34.2,36.5-64.2,63.7-90.1c27.2-25.9,57.7-42.5,91.6-49.8c-33.8-8.6-59.1-25-75.6-49.3c-16.6-24.2-24.9-52.3-24.9-84.1
		c0-23.2,4.3-45.6,12.9-67.2c8.6-21.6,20.7-39.1,36.3-52.8c15.6-13.6,33-20.4,52.3-20.4c15.3,0,28.2,4.5,38.8,13.4
		c10.6,9,15.9,23.1,15.9,42.3c0,17.9-4.3,35.8-12.9,53.7c-8.6,17.9-18.9,28.9-30.9,32.8c13.3,17.9,28.9,26.9,46.8,26.9
		c19.9,0,37.2-10,51.8-29.9c14.6-19.9,21.9-44.4,21.9-73.7c0-39.1-13.3-69.7-39.8-91.6c-26.5-21.9-60.7-32.8-102.5-32.8
		c-40.5,0-77.5,10.5-111,31.4c-33.5,20.9-59.7,47.9-78.6,81.1c-18.9,33.2-28.4,67-28.4,101.5c0,23.2,5,45.3,14.9,66.2
		c10,20.9,25.2,38.7,45.8,53.3c-37.2,9.3-69.7,27.5-97.5,54.7c-27.9,27.2-49.3,58.9-64.2,95.1c-14.9,36.2-22.4,72.2-22.4,108
		c0,50.4,15.4,92.2,46.3,125.4c30.9,33.2,76.5,49.8,136.9,49.8c61,0,118.4-16.9,172.2-50.8c30.7-19.3,56.8-42.4,78.4-69.3L879.3,880
		h143.3l67.7-319.5c8-27.2,18.6-49.3,31.9-66.2c13.3-16.9,28.5-25.4,45.8-25.4c23.9,0,35.8,16.9,35.8,50.8c0,13.9-2.3,32.2-7,54.7
		c-4.7,22.6-9.6,45.5-14.9,68.7c-1.3,4.7-3.8,15.3-7.5,31.9c-3.7,16.6-7.1,33.7-10.5,51.3c-3.3,17.6-5,33.3-5,47.3
		c0,31.9,9.5,58.6,28.4,80.1c18.9,21.6,48.6,32.3,89.1,32.3c34.5,0,67.8-12.4,100-37.3c13.6-10.5,26.6-25.4,38.8-44.5
		c4.4,21.6,13,38.9,25.9,52c19.6,19.9,45.3,29.9,77.1,29.9c37.8,0,76-12.8,114.5-38.3c18-11.9,34.5-28.9,49.4-51
		c6.8,20.8,17.2,37.8,31.2,51c27.2,25.6,65.4,38.3,114.5,38.3c88,0,164.5-40.1,229.5-120.4c4.8,35.2,16.6,62.4,35.3,81.6
		c25.2,25.9,56.7,38.8,94.6,38.8c45.8,0,85.6-18.2,119.4-54.7l-11.9,52.8c-47.1,15.3-85.9,34.3-116.5,57.2
		c-30.5,22.9-45.8,53.3-45.8,91.1c0,31.2,10.6,55.1,31.9,71.7c21.2,16.6,47.8,24.9,79.6,24.9c41.1,0,78-12.1,110.5-36.3
		c32.5-24.2,55.4-68.5,68.7-132.9L2438,888c38.5-10,73-28.7,103.5-56.2c1.4-1.2,2.7-2.5,4.1-3.8l-11,52.1h143.3l79.6-378.2
		c15.3-13.9,27.7-23.7,37.3-29.4c9.6-5.6,21.4-8.5,35.3-8.5c5.3,0,9,2,10.9,6c2,4,4,10.3,6,18.9c2.6,13.3,6.5,23.4,11.4,30.4
		s14.8,10.5,29.4,10.5c22.6,0,40.1-7.3,52.8-21.9c12.6-14.6,18.9-31.5,18.9-50.8C2959.5,436.4,2953.4,418.8,2941.1,404.2z
		 M1879.1,488.8c22.9-41.8,46.3-62.7,70.2-62.7c16.6,0,24.9,13.6,24.9,40.8c0,27.2-6.8,53.1-20.4,77.6
		c-13.6,24.6-31.5,44.8-53.7,60.7c-22.2,15.9-45.6,24.6-70.2,25.9C1839.8,578.1,1856.2,530.6,1879.1,488.8z M2278.7,962.6
		c-6,28.5-14.3,50.4-24.9,65.7c-10.6,15.3-21.6,22.9-32.8,22.9c-10.6,0-18.9-3.3-24.9-10c-6-6.6-9-14.3-9-22.9
		c0-32.5,32.5-60.7,97.5-84.6L2278.7,962.6z M2331.5,711.8c-6,23.9-16.9,42.8-32.8,56.7c-15.9,13.9-31.5,20.9-46.8,20.9
		c-13.9,0-25.7-4.6-35.3-13.9c-9.6-9.3-14.4-30.5-14.4-63.7c0-33.2,6-71.5,17.9-115c11.9-43.5,28.5-80.6,49.8-111.5
		c21.2-30.9,45.1-46.3,71.7-46.3c13.9,0,24.2,4.2,30.9,12.4c6.6,8.3,10,16.4,10,24.4L2331.5,711.8z"
                />
                <G>
                  <Path
                    className="fill-white pth-4"
                    d="M4014.8,328.6c21.9,0,40.6-7.6,56.2-22.9c15.6-15.3,23.4-33.8,23.4-55.7s-7.8-40.6-23.4-56.2
			c-15.6-15.6-34.3-23.4-56.2-23.4c-21.9,0-40.5,7.8-55.7,23.4c-15.3,15.6-22.9,34.3-22.9,56.2s7.6,40.5,22.9,55.7
			C3974.3,321,3992.9,328.6,4014.8,328.6z"
                  />
                  <Path
                    className="fill-white pth-4"
                    d="M4693.6,382.3L4626,701.8c-8,27.2-18.6,48.6-31.9,64.2c-13.3,15.6-29.2,23.4-47.8,23.4
			c-19.9,0-29.9-14.6-29.9-43.8c0-8.6,1-16.9,3-24.9l71.7-338.4h-143.3l-67.7,319.5c0,0,0,0,0,0c-7.3,25.9-19.3,46.9-35.8,63.2
			c-16.6,16.3-34.5,24.4-53.7,24.4c-14.6,0-25.1-2.8-31.4-8.5c-6.3-5.6-9.5-15.1-9.5-28.4c0-11.3,1.3-21.9,4-31.9l63.7-298.6h59.7
			l8-39.8h-59.7l33.8-157.3L4211.9,245L4182,382.3h-32.8l-8,39.8h32.8l-59.7,279.7c0,0,0,0,0,0c-7.3,25.9-19.3,46.9-35.8,63.2
			c-16.6,16.3-34.5,24.4-53.7,24.4c-14.6,0-25.1-2.8-31.4-8.5c-6.3-5.6-9.5-15.1-9.5-28.4c0-11.3,1.3-21.9,4-31.9l71.7-338.4h-143.3
			l-67.7,319.5c0,0,0,0,0,0c-11.9,29.8-23.9,51.9-35.8,66.1c-11.9,14.3-27.9,21.4-47.8,21.4c-14.6,0-24.9-3.6-30.9-10.9
			c-6-7.3-9-17.6-9-30.9c0-11.3,2.1-26.7,6.5-46.3c4.3-19.6,9.1-39.6,14.4-60.2c8.6-33.8,15.3-62.5,19.9-86.1
			c4.6-23.5,7-44.9,7-64.2c0-37.8-10-66-29.9-84.6c-19.9-18.6-46.8-27.9-80.6-27.9c-44.5,0-83.3,18.6-116.5,55.7l10.9-51.8h-143.3
			l-67.8,319.6c-30.5,33.8-58.5,59-84,75.6c-25.6,16.6-56.2,24.9-92.1,24.9c-25.2,0-43.5-5.8-54.7-17.4
			c-11.3-11.6-16.9-33.7-16.9-66.2c0-6.6,0.7-19.9,2-39.8c39.8-2.6,77.3-13.4,112.5-32.3c35.2-18.9,63.4-44,84.6-75.1
			c21.2-31.2,31.9-65.4,31.9-102.5c0-63.7-36.5-95.6-109.5-95.6c-62.4,0-113.8,20.1-154.3,60.2c-40.5,40.2-69.7,87.8-87.6,142.8
			c-17.9,55.1-26.9,105.5-26.9,151.3c0,54.4,13.6,94.4,40.8,119.9c27.2,25.6,65.3,38.3,114.5,38.3c86.1,0,161.1-38.4,225.2-115.2
			L3308.1,880h143.3l67.7-319.5c8-27.2,18.6-49.3,31.8-66.2c13.3-16.9,28.5-25.4,45.8-25.4c23.9,0,35.8,16.9,35.8,50.8
			c0,13.9-2.3,32.2-7,54.7c-4.7,22.6-9.6,45.5-14.9,68.7c-1.3,4.7-3.8,15.3-7.5,31.9c-3.7,16.6-7.1,33.7-10.5,51.3
			c-3.3,17.6-5,33.3-5,47.3c0,31.9,9.5,58.6,28.4,80.1c18.9,21.6,48.6,32.3,89.1,32.3c34.5,0,67.8-12.4,100-37.3
			c13.6-10.5,26.6-25.4,38.8-44.5c4.4,21.6,13,38.9,25.9,52c19.6,19.9,45.3,29.9,77.1,29.9c37.8,0,76-12.8,114.5-38.3
			c17.2-11.4,33-27.5,47.4-48.1c4.1,23.7,13,42.6,26.7,56.5c19.6,19.9,45.3,29.9,77.1,29.9c37.8,0,76-12.8,114.5-38.3
			c17.2-11.4,33-27.5,47.4-48.1c4.1,23.7,13,42.6,26.7,56.5c19.6,19.9,45.3,29.9,77.1,29.9c47.1,0,87.6-19.2,121.4-57.7l-10,43.8
			c-39.2,11.9-70.3,23.2-93.6,33.8c-23.2,10.6-42.1,25.2-56.7,43.8c-14.6,18.6-21.9,42.5-21.9,71.7c0,31.2,11.8,56.9,35.3,77.1
			c23.5,20.2,50.9,30.4,82.1,30.4c40.5,0,77.5-12.3,111-36.8c33.5-24.6,56.9-68.7,70.2-132.4L4838,382.3H4693.6z M3157.3,488.8
			c22.9-41.8,46.3-62.7,70.2-62.7c16.6,0,24.9,13.6,24.9,40.8c0,27.2-6.8,53.1-20.4,77.6c-13.6,24.6-31.5,44.8-53.7,60.7
			c-22.2,15.9-45.6,24.6-70.2,25.9C3118,578.1,3134.5,530.6,3157.3,488.8z M4571.2,962.6c-6,27.2-14.3,46.9-24.9,59.2
			c-10.6,12.3-21.9,18.4-33.8,18.4c-10.6,0-19.9-3.5-27.9-10.5s-11.9-14.4-11.9-22.4c0-25.2,9.6-45.8,28.9-61.7
			c19.2-15.9,46.4-29.9,81.6-41.8L4571.2,962.6z"
                  />
                </G>
              </G>
            </Svg>
          </View>
          <ScrollView
            className="w-full relative"
            horizontal
            pagingEnabled
            decelerationRate={"normal"}
            keyboardDismissMode="on-drag"
            onScroll={(e) => handleScroll(e)}
            ref={scrollViewRef}
          >
            <TouchableHighlight>
              <Card
                title="Toplu Ürün Kontrolü"
                description="Ürünlerinizi topluca kontrolünü sağlayan bu uygulama sayesinde, tek tıkla aynı ürün grubundaki tüm ilanlarınızı güncelleyin."
              />
            </TouchableHighlight>
            <TouchableHighlight>
              <Card
                title="Zaman Tasarrufu"
                description="Aynı ürünler için açılmış onlarca ilanın stok kontrolünde zorlanıyor musunuz? Ürünlerinizi gruplandırarak zaman kaybetmeden kontrolü elinize alın."
              />
            </TouchableHighlight>
            <TouchableHighlight>
              <Card
                title="Karlılık Hesaplama"
                description="Ürün gruplarınıza alış fiyatları girerek her satışınızdan ne kadar kar ettiğinizi otomatik olarak öğrenin. Aylık karınızı net olarak analiz edin."
              />
            </TouchableHighlight>
            <Login />
          </ScrollView>
          {pagination === 1 ? (
            <View className="flex flex-row my-6">
              <View className="w-6 h-2 mx-1 rounded-xl bg-orange-600"></View>
              <View className="w-2 h-2 mx-1 rounded-xl bg-orange-600"></View>
              <View className="w-2 h-2 mx-1 rounded-xl bg-orange-600"></View>
              <View className="w-2 h-2 mx-1 rounded-xl bg-orange-600"></View>
            </View>
          ) : pagination === 2 ? (
            <View className="flex flex-row my-6">
              <View className="w-2 h-2 mx-1 rounded-xl bg-orange-600"></View>
              <View className="w-6 h-2 mx-1 rounded-xl bg-orange-600"></View>
              <View className="w-2 h-2 mx-1 rounded-xl bg-orange-600"></View>
              <View className="w-2 h-2 mx-1 rounded-xl bg-orange-600"></View>
            </View>
          ) : pagination === 3 ? (
            <View className="flex flex-row my-6">
              <View className="w-2 h-2 mx-1 rounded-xl bg-orange-600"></View>
              <View className="w-2 h-2 mx-1 rounded-xl bg-orange-600"></View>
              <View className="w-6 h-2 mx-1 rounded-xl bg-orange-600"></View>
              <View className="w-2 h-2 mx-1 rounded-xl bg-orange-600"></View>
            </View>
          ) : (
            <View className="flex flex-row my-6">
              <View className="w-2 h-2 mx-1 rounded-xl bg-orange-600"></View>
              <View className="w-2 h-2 mx-1 rounded-xl bg-orange-600"></View>
              <View className="w-2 h-2 mx-1 rounded-xl bg-orange-600"></View>
              <View className="w-6 h-2 mx-1 rounded-xl bg-orange-600"></View>
            </View>
          )}
          <View className="w-full flex flex-row justify-evenly items-center">
            <TouchableHighlight className="flex justify-center items-center">
              <Text
                onPress={() => navigation.navigate("Register")}
                className="text-white text-xl bg-orange-600 py-3 px-8 rounded-xl  flex justify-center items-center"
              >
                Hemen Kayıt Olun
              </Text>
            </TouchableHighlight>
          </View>
          <StatusBar
            backgroundColor="#1e293b"
            barStyle="light-content"
            animated={true}
            translucent={true}
          />
        </View>
      ) : (
        <LoadingScreen />
      )}
    </SafeAreaView>
  );
}
