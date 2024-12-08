import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SplashPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col h-screen bg-blue items-center">
      <div className="h-2/4 flex items-end justify-center">
        <img className="object-contain "
          src="https://i.ibb.co/RQgcbfk/logo.png"
          alt="splash-img"
        />
      </div>
      <div className="flex h-2/4 flex-col gap-2 items-center justify-center w-full px-4 md:w-2/4">
        <Link to="/login" className="w-full">
          <Button className="h-[4rem] w-full hover:text-surface-neutral hover:bg-blue hover:border-surface-neutral tracking-wide text-[1.2rem] font-semibold text-blue bg-surface-neutral border border-blue">
            Iniciar Sesion
          </Button>
        </Link>
        <Link to="/register" className="w-full">
          <Button className="h-[4rem] w-full hover:text-blue hover:bg-surface-neutral hover:border-blue  tracking-wide text-[1.2rem] font-semibold bg-blue text-surface-neutral">
            Registrarse
          </Button>
        </Link>
        <Link to="/home" className="flex flex-row gap-2 w-full h-[4rem] items-center justify-center">
          <Label className="text-surface-neutral font-semibold tracking-wide text-[1.2rem] underline">Saltar estos pasos</Label>
          <ArrowRight className="text-surface-neutral h-8 w-8"/>
        </Link>
      </div>
    </div>
  );
}

export default SplashPage;