import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 w-full">
      <div className="flex flex-col items-center w-full gap-4 ">
        <Link to="/home" className="flex flex-row gap-4 items-center w-full fixed top-0 left-0 right-0 z-20 h-[4rem] bg-surface-neutral mb-6">
          <ArrowLeft className="h-8 w-8" />
          <Label className="text-[1.5rem] text-black font-semibold tracking-wide">Contactos</Label>
        </Link>
      </div>
      <div className="w-full mt-[5rem] flex flex-col items-start justify-center h-full">
        <div className="flex flex-row gap-2 items-center ">
          <Label className="text-black font-semibold text-[1.5rem] tracking-wide">WhatsApp:</Label>
          <Label>+505 5720 7708</Label>
        </div>
        <div className="h-[1px] w-full bg-black"></div>
        <Label className="text-black font-semibold text-[1.5rem] tracking-wide">Redes Sociales:</Label>
        <div className="flex flex-row gap-2 items-center ">
          <Label className="text-black font-semibold text-[1.5rem] tracking-wide">Facebook:</Label>
          <Label>@MoneyPlataYDemas</Label>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;