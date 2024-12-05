import { HomePrincipalSkeleton } from "@/components/skeletons/HomePrincipalSkeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAuthContext } from "@/context/AuthContext";
import { Producto, Usuario } from "@/models/EntitiesModel";
import { ProductService } from "@/services/ProductService";
import { UserService } from "@/services/UserService";
import { ArrowLeft, Search, Trash } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WishListPage: React.FC = () => {
  const { user } = useAuthContext();
  const [wishListProducts, setWishListProducts] = useState<Producto[]>([]);
  const [loading, setLoading]=useState<boolean>(false);


  const fetchWishList = useCallback(async () => { 
    setLoading(true);
    try {
      if (!user) return;
      const usuario: Usuario |null = await UserService.getUser(user.uid);

      if (usuario && usuario.listaDeseos) {
        const productsPromises = usuario.listaDeseos.map((productId) =>
          ProductService.getProduct(productId)
        );
  
        const products = await Promise.all(productsPromises);

        const validProducts = products.filter(
          (product): product is Producto => product !== null
        );
  
        setWishListProducts(validProducts);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error al obtener la lista de deseos:", error);
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchWishList();
  }, [user, fetchWishList]);

  const handleRemoveProd=async(productId:string)=>{
    try{
      if(!user) return;
      await UserService.removeProductFromWishlist(user.uid, productId);
      fetchWishList();
    }catch{
      console.log("error removing this product")
    }
  }

  return (
    <div className="flex flex-col items-center w-full px-4">
      <div className="flex flex-col items-center w-full gap-4 ">
        <Link
          to="/home"
          className="flex flex-row gap-4 items-center w-full fixed top-0 left-0 right-0 z-20 h-[4rem] bg-surface-neutral mb-6"
        >
          <ArrowLeft className="h-8 w-8" />
          <Label className="text-[1.5rem] text-black font-semibold tracking-wide">Lista de Deseos</Label>
        </Link>
        <div className="w-full mt-[5rem]">
          <Button className="w-full h-[3rem] flex flex-row justify-start border items-center bg-gray text-dark-gray">
            <Search />
            Search...
          </Button>
        </div>
        <div className="flex flex-col items-center gap-2 w-full mb-6">
          {loading ? (
            <div className="flex flex-col gap-2">
              <HomePrincipalSkeleton/>
              <HomePrincipalSkeleton/>
              <HomePrincipalSkeleton/>
            </div>
          ): wishListProducts.length > 0 ? (
            wishListProducts.map((item, index) => (
              <Card className="w-full" key={index}>
                <CardContent className="p-1 flex flex-row">
                  <div className="w-1/2 h-full">
                    <img
                      className="object-cover h-[8rem] w-full rounded-md border border-dark-gray"
                      src={item.imagen}
                      alt="image-card"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col gap-1 items-start text-left pl-1">
                    <Label className="text-black font-semibold text-[1.2rem]">{item.titulo}</Label>
                    {/* <div className="flex flex-wrap gap-2">
                      {item.categorias.map((categoria, index) => (
                        <Badge
                          key={index}
                          className="px-2 bg-blue text-surface-neutral"
                        >
                          {categoria}
                        </Badge>
                      ))}
                    </div> */}
                    <Label className="text-black font-extrabold text-[1.2rem]">C${item.precio}</Label>
                    <div className="w-full flex justify-end">
                      <Trash  onClick={()=>handleRemoveProd(item.id)} className="h-6 w-6 text-red" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Label className="text-gray text-center mt-4">No tienes productos en tu lista de deseos.</Label>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
