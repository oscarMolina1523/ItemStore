import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface AlertAuthComponentProps {
  show: boolean;
  onClose: () => void;
}

const AlertAuthComponent: React.FC<AlertAuthComponentProps> = ({show, onClose}) => {

  const navigate=useNavigate();

  const handleRegisterClick=()=>{
    navigate("/register");
    onClose();
  }

  const handleLoginClick=()=>{
    navigate("/login");
    onClose();
  }

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center overflow-y-auto bg-black bg-opacity-40 z-50">
    <Card className="w-full md:w-1/2 mt-20 bg-black border border-most-dark-ocean-blue">
      <CardDescription>
        <div className="flex flex-row items-center justify-between px-4 py-4 border-b-2 border-surface-neutral text-surface-neutral">
          <Label className="text-[1.2rem]">Autenticarse</Label>
          <X onClick={onClose} />
        </div>
      </CardDescription>
      <div className="flex flex-col px-4 py-4 gap-2">
        <Label className="text-left text-surface-neutral text-[1.2rem] tracking-wide text-opacity-75">
          Para hacer uso de esta funcion debera iniciar sesion o en caso de no tener 
          una cuenta registrarse, favor seleccionar una opcion o tocar la "X" para seguir 
          en este modo
        </Label>
      </div>
      <div className="flex flex-row gap-2 w-full items-center justify-end px-4 py-4">
        <Button
        onClick={handleRegisterClick}
          className="bg-blue text-surface-neutral font-semibold hover:text-blue hover:border-blue hover:bg-surface-neutral"
        >
          Registrarse
        </Button>
        <Button
          className="text-blue bg-surface-neutral font-semibold hover:text-surface-neutral 
          hover:bg-blue"
          onClick={handleLoginClick}
        >
          Iniciar Sesion
        </Button>
      </div>
    </Card>
  </div>
  );
}

export default AlertAuthComponent;