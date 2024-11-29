import { Button } from "@/components/ui/button";
import React from "react";

const SplashPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col h-screen bg-blue item-center">
      <div className="h-2/4 flex items-end justify-center">
        <img className="object-contain "
          src="src\assets\splash.svg"
          alt="splash-img"
        />
      </div>
      <div className="flex h-2/4 flex-col gap-2 items-center justify-center w-full px-4">
        <div className="w-full">
          <Button className="h-[4rem] w-full hover:text-surface-neutral hover:bg-blue hover:border-surface-neutral tracking-wide text-[1.2rem] font-semibold text-blue bg-surface-neutral border border-blue">
            Iniciar Sesion
          </Button>
        </div>
        <div className="w-full">
          <Button className="h-[4rem] w-full hover:text-blue hover:bg-surface-neutral hover:border-blue  tracking-wide text-[1.2rem] font-semibold bg-blue text-surface-neutral">
            Registrarse
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;