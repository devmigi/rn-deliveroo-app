import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="text-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="text-xs text-grey-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Indian"
          rating={4.5}
          genre="Indian"
          address="123 Delhi India"
          short_description="This is test Desc"
          dishes={[]}
          lon={20}
          lat={0}
        />

        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Indian"
          rating={4.5}
          genre="Indian"
          address="123 Delhi India"
          short_description="This is test Desc"
          dishes={[]}
          lon={20}
          lat={0}
        />

        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Indian"
          rating={4.5}
          genre="Indian"
          address="123 Delhi India"
          short_description="This is test Desc"
          dishes={[]}
          lon={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
