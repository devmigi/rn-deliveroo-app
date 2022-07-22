import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* HEADER */}
      <View className="flex-row pb-3 item-center mx-4 space-x-2 ">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* SEARCH */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-100 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurant and Cuisines"
            keyboardType="default"
          ></TextInput>
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      {/* BODY */}
      <ScrollView
        className="be-gray-100"
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* CATEGORIES */}
        <Categories />

        {/* FEATURED ITEMS */}
        <FeaturedRow
          title="Featured"
          description="Paid partners placement"
          id="featured"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          title="Tasty Discounts"
          description="Everyone's enjoying these juicy discounts"
          id="discounts"
        />

        {/* Offers near you */}
        <FeaturedRow
          title="Offers near you"
          description="Why not support your local restaurants today"
          id="offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
