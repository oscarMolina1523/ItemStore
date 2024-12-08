import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Usuario } from "@/models/EntitiesModel";
import { AuthService } from "@/services/AuthService";
import { UserService } from "@/services/UserService";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [exit, setExit] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [failed, setFailed] = useState<string | null>(null);

  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    try {

      if (!validateEmail(email)) {
        setFailed("Porfavor ingresar un email valido.");
        return;
      }

      const userId = await AuthService.RegisterService(email, password);
      const token = await userId.getIdToken();
      localStorage.setItem("authToken", token);

      const newUser: Usuario = {
        id: userId.uid,
        nombre: '@' + username,
        foto: 'https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg',
        descripcion: '',
        rol: 'user',
        listaDeseos: [],
      }

      await UserService.createUser(newUser);

      const loginTime = new Date().getTime();
      localStorage.setItem("loginTime", loginTime.toString());
      setExit(true);
      navigate("/home");
    } catch {
      setError(true);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 px-4 h-full mb-6">
      <div className="flex flex-col items-center w-full gap-4 md:hidden">
        <Link to="/splash" className="flex flex-row gap-4 items-center w-full fixed top-0 left-0 right-0 z-20 h-[4rem] bg-surface-neutral mb-6">
          <ArrowLeft className="h-8 w-8" />
          <Label className="text-[1.5rem] text-black font-semibold tracking-wide">Registrarse</Label>
        </Link>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center md:mt-[2rem] bg-blue h-[4rem] w-2/4">
        <Label className="text-[1.5rem] text-surface-neutral font-semibold tracking-wide">Registrarse</Label>
      </div>
      <div className="flex flex-col gap-4 items-center w-full mt-[4rem] md:w-2/4">
        {error && (<Label className="text-red">Error al registrarse</Label>)}
        {failed && (<Label className="text-red">{failed}</Label>)}
        {exit && (<Label>Successful</Label>)}
        <div className="flex flex-col gap-1 text-left w-full">
          <Label className="text-[1.2rem] tracking-wide text-black">Nombre</Label>
          <Input value={username} onChange={(e) => setUsername(e.target.value)}
            className="h-[3rem]" placeholder="ej. Juan Jose Sanchez Rodriguez" />
        </div>
        <div className="flex flex-col gap-1 text-left w-full">
          <Label className="text-[1.2rem] tracking-wide text-black">E-mail</Label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)}
            className="h-[3rem]" placeholder="ej. jorge@gmail.com" />
        </div>
        <div className="flex flex-col gap-1 text-left w-full">
          <Label className="text-[1.2rem] tracking-wide text-black">Contraseña</Label>
          <Input value={password} onChange={(e) => setPassword(e.target.value)}
            type="password" className="h-[3rem]" placeholder="ej. ghHJ5V!h" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Button onClick={handleRegister}
            className="bg-blue h-[3rem] text-[1.2rem] tracking-wide font-semibold text-surface-neutral hover:bg-surface-neutral hover:text-blue hover:border hover:border-blue">Crear Cuenta</Button>
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