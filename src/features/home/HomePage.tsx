import FooterComponent from "@/shared/FooterComponent";
import React from "react";
import HomeCategoriesComponent from "./HomeCategories";
import HomePrincipalComponent from "./HomePrincipal";
import HomeProductsComponent from "./HomeProducts";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full flex-grow items-center">
      <HomePrincipalComponent/>
      <HomeCategoriesComponent/>
      <HomeProductsComponent/>
      <FooterComponent/>
    </div>
  );
}

export default HomePage;