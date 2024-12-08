import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthService } from "@/services/AuthService";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await AuthService.LoginService(inputEmail, inputPassword);
      const token = await response.getIdToken();
      const loginTime = new Date().getTime();
      localStorage.setItem("authToken", token);
      localStorage.setItem("loginTime", loginTime.toString());
      navigate("/home");
    } catch {
      setError(true);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 px-4 h-screen w-full">
      <div className="flex flex-col items-center w-full md:hidden gap-4 ">
        <Link to="/splash" className="flex flex-row gap-4 items-center w-full fixed top-0 left-0 right-0 z-20 h-[4rem] bg-surface-neutral mb-6">
          <ArrowLeft className="h-8 w-8" />
          <Label className="text-[1.5rem] text-black font-semibold tracking-wide">Iniciar Sesion</Label>
        </Link>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center md:mt-[2rem] bg-blue h-[4rem] w-2/4">
        <Label className="text-[1.5rem] text-surface-neutral font-semibold tracking-wide">Iniciar Sesion</Label>
      </div>
      <Label className="mt-[4rem] md:mt-2 mb-[1rem] tracking-wide text-black text-left w-full md:w-2/4">
        *Por favor complete el correo electrónico y la contraseña para iniciar sesión en su
        Cuenta de aplicación Shopy.
      </Label>
      {error && (<Label className="text-red">Email o contraseña incorrecta</Label>)}
      <div className="flex flex-col gap-4 items-center w-full md:w-2/4">
        <div className="flex flex-col gap-1 text-left w-full">
          <Label className="text-[1.2rem] tracking-wide text-black">E-mail</Label>
          <Input value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}
            className="h-[3rem] bg-gray" placeholder="ej. jorge@gmail.com" />
        </div>
        <div className="flex flex-col gap-1 text-left w-full">
          <Label className="text-[1.2rem] tracking-wide text-black">Contraseña</Label>
          <Input value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}
            type="password" className="h-[3rem] bg-gray" placeholder="ej. ghHJ5V!h" />
        </div>
        <div className="flex flex-col gap-1 text-right w-full">
          <Label className=" tracking-wide text-red">Olvido su contraseña?</Label>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Button onClick={handleLogin}
            className="bg-blue h-[3rem] text-[1.2rem] tracking-wide font-semibold text-surface-neutral hover:bg-surface-neutral hover:text-blue hover:border hover:border-blue">Continuar</Button>
        </div>
        <div className="flex flex-row gap-1 w-full items-center">
          <div className="w-1/2 h-[1px] bg-black"></div>
          <Label className=" tracking-wide text-black">O</Label>
          <div className="w-1/2 h-[1px] bg-black"></div>
        </div>
        <div className="flex flex-row gap-1 items-center justify-center w-full">
          <Label className=" tracking-wide text-black">No tiene una cuenta?</Label>
          <Link to="/register" className="font-semibold tracking-wide text-blue">Registrarse</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;