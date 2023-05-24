import { View, Text } from "react-native";

const Card = ({ title, description }) => {
  return (
    <View className="bg-slate-800 w-screen h-[300px] flex justify-center items-center my-20">
      <Text className="text-white text-2xl font-bold my-10">{title}</Text>
      <Text className="text-white text-lg flex justify-center text-center font-medium px-5">
        {description}
      </Text>
    </View>
  );
};

export default Card;
