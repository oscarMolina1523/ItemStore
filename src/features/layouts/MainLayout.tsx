import FooterComponent from "@/shared/FooterComponent";
import FooterDesktopComponent from "@/shared/FooterDesktopComponent";
import React from "react";
import { Outlet } from "react-router-dom";
import HomePrincipalDesktopComponent from "../home/HomePrincipalDesktop";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <HomePrincipalDesktopComponent />
      <div className="pb-[4rem] w-full">
        <Outlet />
      </div>
      <FooterComponent />
      <FooterDesktopComponent />
    </div>
  );
}

export default MainLayout;