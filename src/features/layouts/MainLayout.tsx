import FooterComponent from "@/shared/FooterComponent";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <Outlet />
      <FooterComponent/>
    </div>
  );
}

export default MainLayout;