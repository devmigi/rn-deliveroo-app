import { ScrollView, Image } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 4"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 5"
      />
    </ScrollView>
  );
};

export default Categories;
