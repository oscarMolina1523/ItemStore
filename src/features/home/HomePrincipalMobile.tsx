import React from "react";
import { Link } from "react-router-dom";

const HomePrincipalMobileComponent: React.FC = () => {
  return (
    <div className="w-full md:w-3/4 h-[4rem] text-dark-ocean-blue bg-blue text-surface-neutral flex flex-row mb-6 fixed shadow-[0_4px_8px_rgba(0,0,0,0.2)] top-0 z-50 dark:bg-dark-ocean-blue">
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
        <Link to="/home" className="hover:underline">Home</Link>
        <Link to="/wishList" className="hover:underline">Lista Deseos</Link>
        <Link to="/profile" className="hover:underline">Perfil</Link>
        <Link to="/contact" className="hover:underline">Contacto</Link>
      </div>
      <div className="flex w-1/3 flex-row items-center justify-end space-x-2 p-2">
      </div>
    </div>
  );
}

export default HomePrincipalMobileComponent;