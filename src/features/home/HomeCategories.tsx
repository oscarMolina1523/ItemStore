import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React from "react";

const HomeCategoriesComponent: React.FC = () => {
  return (
    <div className="flex flex-row w-full items-center justify-center mt-4 gap-6">
      <div className="flex flex-col gap-2">
        <Button className="bg-sky-blue h-[3rem]">
          <img src="https://i.ibb.co/FDLT3rc/men.png" alt="men-img"/>
        </Button>
        <Label className="text-black font-semibold">Hombre</Label>
      </div>
      <div className="flex flex-col gap-2">
        <Button className="bg-sky-blue h-[3rem]">
          <img src="https://i.ibb.co/g4D0Qmx/women.png" alt="women-img"/>
        </Button>
        <Label className="text-black font-semibold">Mujer</Label>
      </div>
      <div className="flex flex-col gap-2">
        <Button className="bg-sky-blue h-[3rem]">
          <img src="https://i.ibb.co/GpGzCkd/child.png" alt="child-img"/>
        </Button>
        <Label className="text-black font-semibold">Niños</Label>
      </div>
    </div>
  );
}

export default HomeCategoriesComponent;