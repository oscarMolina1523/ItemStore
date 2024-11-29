import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 h-screen">
      <div className="flex flex-col items-center w-full gap-4 ">
        <Link to="/splash" className="flex flex-row gap-4 items-center w-full fixed top-0 left-0 right-0 z-20 h-[4rem] bg-surface-neutral mb-6">
          <ArrowLeft className="h-8 w-8" />
          <Label className="text-[1.5rem] text-black font-semibold tracking-wide">Registrarse</Label>
        </Link>
      </div>
      <div className="flex flex-col gap-4 items-center w-full mt-[4rem]">
        <div className="flex flex-col gap-1 text-left w-full">
          <Label className="text-[1.2rem] tracking-wide text-black">Nombre</Label>
          <Input className="h-[3rem]" placeholder="ej. Juan Jose Sanchez Rodriguez"/>
        </div>
        <div className="flex flex-col gap-1 text-left w-full">
          <Label className="text-[1.2rem] tracking-wide text-black">E-mail</Label>
          <Input className="h-[3rem]" placeholder="ej. jorge@gmail.com"/>
        </div>
        <div className="flex flex-col gap-1 text-left w-full">
          <Label className="text-[1.2rem] tracking-wide text-black">Contraseña</Label>
          <Input type="password" className="h-[3rem]" placeholder="ej. ghHJ5V!h"/>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Button className="bg-blue h-[3rem] text-[1.2rem] tracking-wide font-semibold text-surface-neutral hover:bg-surface-neutral hover:text-blue hover:border hover:border-blue">Crear Cuenta</Button>
        </div>
        <div className="flex flex-row gap-1 w-full items-center">
          <div className="w-1/2 h-[1px] bg-black"></div>
          <Label className=" tracking-wide text-black">O</Label>
          <div className="w-1/2 h-[1px] bg-black"></div>
        </div>
        <div className="flex flex-row gap-1 items-center justify-center w-full">
          <Label className=" tracking-wide text-black">Ya posee una cuenta?</Label>
          <Link to="/login" className="font-semibold tracking-wide text-blue">Iniciar Sesion</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;