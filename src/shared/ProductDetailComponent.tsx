import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAuthContext } from "@/context/AuthContext";
import { Producto } from "@/models/EntitiesModel";
import { UserService } from "@/services/UserService";
import { Heart, X } from "lucide-react";
import React from "react";

interface ProductDetailComponentProps {
  show: boolean;
  onClose: () => void;
  product: Producto;
}

const ProductDetailComponent: React.FC<ProductDetailComponentProps> = ({
  show,
  onClose,
  product
}) => {
  const {user}=useAuthContext();

  if(!user) return;

  const handleAddWishList=async()=>{
    await UserService.addProductToWishlist(user.uid,product.id);
    alert("producto agregado a la lista de deseos");
  }

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center overflow-y-auto bg-black bg-opacity-40 z-50 transition-opacity duration-500 ease-[cubic-bezier(0.42, 0, 0.58, 1)]">
      <Card className="w-full md:w-1/2 border mt-20">
        <CardDescription>
          <div className="flex flex-row items-center justify-between px-4 py-4 border-b-2 border-surface-neutral text-black">
            <Label className="text-[1.2rem]">Detalle Producto</Label>
            <X onClick={onClose} />
          </div>
        </CardDescription>
        <CardContent>
          <div className="flex w-full h-1/2">
            <img className="object-cover w-full h-full"
              src={product.imagen}
              alt="profile-img" />
          </div>
          <div className="flex flex-col gap-2 items-start text-left">
            <p><strong className="font-semibold tracking-wide">Nombre: </strong>{product.titulo}</p>
            <p><strong className="font-semibold tracking-wide">Descripcion: </strong>{product.descripcion}</p>
            <p><strong className="font-semibold tracking-wide">Precio: C$</strong>{product.precio}</p>
          </div>
          <br />
          <div className="flex flex-wrap gap-2">
            {product.categorias.map((categoria, index) => (
              <Badge
                key={index}
                className="px-2 bg-blue text-surface-neutral"
              >
                {categoria}
              </Badge>
            ))}
          </div>
          <br />
          <div>
            <Button onClick={handleAddWishList} className="bg-red text-surface-neutral"><Heart />Agregar a lista de deseos</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductDetailComponent;