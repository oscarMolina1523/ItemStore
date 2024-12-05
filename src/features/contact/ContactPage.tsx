import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <div className="flex flex-col items-center w-full gap-4 ">
        <Link to="/home" className="flex flex-row gap-4 items-center w-full fixed top-0 left-0 right-0 z-20 h-[4rem] bg-surface-neutral mb-6">
          <ArrowLeft className="h-8 w-8" />
          <Label className="text-[1.5rem] text-black font-semibold tracking-wide">Contactos</Label>
        </Link>
      </div>
      <div className="w-full mt-[5rem]">
        Aca estan los contactos y la info que pondre 
      </div>
    </div>
  );
}

export default ContactPage;