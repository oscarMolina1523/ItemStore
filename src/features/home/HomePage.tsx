import React from "react";
import HomeCategoriesComponent from "./HomeCategories";
import HomePrincipalComponent from "./HomePrincipal";
import HomeProductsComponent from "./HomeProducts";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <HomePrincipalComponent/>
      <HomeCategoriesComponent/>
      <HomeProductsComponent/>
    </div>
  );
}

export default HomePage;