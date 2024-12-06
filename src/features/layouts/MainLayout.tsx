import FooterComponent from "@/shared/FooterComponent";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <div className="pb-[4rem] w-full">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
}

export default MainLayout;