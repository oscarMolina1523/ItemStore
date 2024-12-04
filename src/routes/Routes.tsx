import LoginPage from "@/features/auth/login/LoginPage";
import RegisterPage from "@/features/auth/register/RegisterPage";
import SplashPage from "@/features/auth/splash/SplashPage";
import ContactPage from "@/features/contact/ContactPage";
import ErrorPage from "@/features/error/Error";
import HomePage from "@/features/home/HomePage";
import MainLayout from "@/features/layouts/MainLayout";
import ManageProductsPage from "@/features/ManageProducts.tsx/ManageProducts";
import ProductsListPage from "@/features/productsList/ProductsListPage";
import ProfilePage from "@/features/profile/ProfilePage";
import SearchPage from "@/features/search/SearchPage";
import WishListPage from "@/features/wishList/WishListPage";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "splash",
    element: <SplashPage />
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "register",
    element: <RegisterPage />
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // Esta propiedad indica que esta es la ruta por defecto
        element: <Navigate to="/home" /> 
      },
      {
        path: "/home",
        element: <HomePage />
      },
      {
        path:"/search",
        element: <SearchPage/>
      },
      {
        path:"/profile",
        element: <ProfilePage/>
      },
      {
        path:"/wishList",
        element: <WishListPage/>
      },
      {
        path:"/productList",
        element: <ProductsListPage/>
      },
      {
        path:"/manageProduct",
        element: <ManageProductsPage/>
      },
      {
        path:"/contact",
        element: <ContactPage/>
      },
    ],
  },
  {
    path:"*",
    element: <ErrorPage/>
  },
]);

export default router;