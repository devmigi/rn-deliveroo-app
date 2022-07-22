import { ScrollView, Text, Image, View, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      lon,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: imgUrl }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon size={22} color="green" opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> . {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <LocationMarkerIcon size={22} color="gray" opacity={0.4} />
              <Text className="text-xs text-gray-500">Nearby . {address}</Text>
            </View>
          </View>

          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-1 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
          <Text className="pl2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

        {/* DISHES ROW */}
        <DishRow
          id="123"
          name="Banana Oreo"
          description="Eat healthy bananas"
          price={100}
          image="https://links.papareact.com/gn7"
        />

        <DishRow
          id="123"
          name="Mango Lassi Drink"
          description="Drink till you're full"
          price={100}
          image="https://links.papareact.com/gn7"
        />

        <DishRow
          id="123"
          name="Pinapple Pizza"
          description="Best italian flavour in the city"
          price={100}
          image="https://links.papareact.com/gn7"
        />

        <DishRow
          id="123"
          name="Strawberry Jelly"
          description="Helly belly jelly"
          price={100}
          image="https://links.papareact.com/gn7"
        />

        <DishRow
          id="123"
          name="Cucumber Salad"
          description="Health is wealth"
          price={100}
          image="https://links.papareact.com/gn7"
        />

        <DishRow
          id="123"
          name="Pumpkin Mocktail"
          description="Well is jail mock is tail "
          price={100}
          image="https://links.papareact.com/gn7"
        />
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
