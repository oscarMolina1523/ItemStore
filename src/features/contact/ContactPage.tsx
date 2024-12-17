import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Facebook, Instagram, Music } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 w-full">
      <div className="flex flex-col items-center w-full gap-4 md:hidden">
        <Link to="/home" className="flex flex-row gap-4 items-center w-full fixed top-0 left-0 right-0 z-20 h-[4rem] bg-surface-neutral mb-6">
          <ArrowLeft className="h-8 w-8" />
          <Label className="text-[1.5rem] text-black font-semibold tracking-wide">Contactos</Label>
        </Link>
      </div>
      <div className="w-full mt-[5rem] flex flex-col items-start justify-center h-full  md:w-3/4 gap-4">
        <div className="flex flex-row gap-2 items-center ">
          <Label className="text-black font-semibold text-[1.5rem] tracking-wide">WhatsApp:</Label>
          <Label>+505 8452 9115</Label>
        </div>
        <div className="h-[1px] w-full bg-black"></div>
        <Label className="text-black font-semibold text-[1.5rem] tracking-wide">Redes Sociales:</Label>
        <div className="flex flex-row gap-2 items-center justify-center w-full">
          <Button variant="outline" className="opacity-75 hover:opacity-100 bg-blue text-surface-neutral" onClick={() => window.open('https://www.facebook.com/isabel.argueta.7140')}>
            <Facebook className="h-4 w-4" />
            Facebook
          </Button>
        </div>
        <div className="flex flex-row gap-2 items-center ">
          <Button variant="outline" className="opacity-75 hover:opacity-100 bg-pink text-surface-neutral" onClick={() => window.open('https://www.instagram.com/isabel.marisa2811/profilecard/?igsh=MXFqaWJvdWYxNWZwNQ==')}>
            <Instagram className="h-4 w-4" />
            Instagram
          </Button>
        </div>
        <div className="flex flex-row gap-2 items-center ">
          <Button variant="outline" className="opacity-95 hover:opacity-100 bg-dark-black text-surface-neutral" onClick={() => window.open('https://www.tiktok.com/@isabelargueta261?_t=8s6MC0jgR4X&_r=1')}>
            <Music className="h-4 w-4" />
            TIK-TOK
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;