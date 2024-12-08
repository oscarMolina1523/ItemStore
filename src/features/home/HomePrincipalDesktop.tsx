import { useAuthContext } from "@/context/AuthContext";
import AlertAuthComponent from "@/shared/AlertAuthComponent";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

const HomePrincipalDesktopComponent: React.FC = () => {
  const { user } = useAuthContext();
  const [notAuthenticated, setNotAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/home");
  }

  const handleClickWishList = () => {
    if (user) {
      setNotAuthenticated(false);
      navigate("/wishList");
    }
    else {
      setNotAuthenticated(true);
    }
  }

  const handleClickContact = () => {
    navigate("/contact");
  }

  const handleClickProfile = () => {
    if (user) {
      setNotAuthenticated(false);
      navigate("/profile");
    }
    else {
      setNotAuthenticated(true);
    }
  }
  return (
    <div className="hidden md:flex w-full md:w-3/4 h-[4rem] text-dark-ocean-blue bg-blue text-surface-neutral flex-row mb-6 fixed shadow-[0_4px_8px_rgba(0,0,0,0.2)] top-0 z-50 dark:bg-dark-ocean-blue">
      <div className="md:hidden w-1/3 flex flex-row items-center justify-start gap-1 px-2">
        <div className="flex flex-row">
          <div className="h-8 w-8 text-dark-ocean-blue dark:text-surface-neutral" />
        </div>
      </div>
      <div className="w-1/3 flex flex-row items-center justify-start gap-1 pl-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue">
          <img className="object-contain h-8 w-8"
            src="https://i.ibb.co/RQgcbfk/logo.png"
            alt="splash-img"
          />
        </div>
        <div className="flex flex-row">
        <span className="font-bold text-[1.2rem]">Chavarria</span>
        </div>
      </div>
      <div className="hidden w-1/3 md:flex flex-row md:justify-between items-center">
        <div onClick={handleClickHome} className="hover:underline">Home</div>
        <div onClick={handleClickWishList} className="hover:underline">Lista Deseos</div>
        <div onClick={handleClickProfile} className="hover:underline">Perfil</div>
        <div onClick={handleClickContact} className="hover:underline">Contacto</div>
      </div>
      <div className="flex w-1/3 flex-row items-center justify-end space-x-2 p-2">
      </div>
      {notAuthenticated && (<AlertAuthComponent show={notAuthenticated} onClose={() => setNotAuthenticated(false)} />)}
    </div>
  );
}

export default HomePrincipalDesktopComponent;