import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
      <Label className="text-[2rem] tracking-wide font-bold">404 Not Found</Label>
      <Label className="text-[1.2rem] tracking-wide font-semibold">Esta pagina no existe</Label>
      <Link to="/home">
        <Button className="bg-blue text-surface-neutral h-[3rem] tracking-wide font-semibold">Regresar</Button>
      </Link>
    </div>
  );
}

export default ErrorPage;