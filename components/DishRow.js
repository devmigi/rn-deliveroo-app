import { TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";

const DishRow = ({ id, name, description, image, price }) => {
  return (
    <TouchableOpacity
      className="bg-white border p-4 border-gray-200"
      onPress={() => {}}
    >
      <View className="flex-row">
        <View className="flex-1 pr-2 ">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400 mt-2">INR {price}</Text>
        </View>
        <View>
          <Image
            source={{ uri: image }}
            className="h-20 w-20 p-4"
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
