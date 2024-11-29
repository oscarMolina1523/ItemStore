import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Heart, X } from "lucide-react";
import React from "react";

interface ProductDetailComponentProps {
  show: boolean;
  onClose: () => void;
}

const ProductDetailComponent: React.FC<ProductDetailComponentProps> = ({
  show,
  onClose
}) => {
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center overflow-y-auto bg-black bg-opacity-40 z-50 transition-opacity duration-500 ease-[cubic-bezier(0.42, 0, 0.58, 1)]">
      <Card className="w-full md:w-1/2 mt-20 border ">
        <CardDescription>
          <div className="flex flex-row items-center justify-between px-4 py-4 border-b-2 border-surface-neutral text-black">
            <Label className="text-[1.2rem]">Detalle Producto</Label>
            <X onClick={onClose} />
          </div>
        </CardDescription>
        <CardContent>
          <div className="flex w-full h-1/2">
            <img className="object-cover w-full h-full"
              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_1200x1200/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=1-9sfjwH"
              alt="profile-img" />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Label>Nombre:</Label>
            <Label>Descripcion:</Label>
            <Label>Categoria:</Label>
            <Label>Precio:</Label>
          </div>
          <div>
            <Button><Heart />Agregar a lista de deseos</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductDetailComponent;