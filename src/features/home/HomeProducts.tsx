import { CarouselProductSkeleton } from "@/components/skeletons/CarouselProductSkeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { useProductContext } from "@/context/ProductContext";
import { useSingleProductContext } from "@/context/SingleProductContext";
import { Producto } from "@/models/EntitiesModel";
import ProductDetailComponent from "@/shared/ProductDetailComponent";
import { Heart } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeProductsComponent: React.FC = () => {
  const { fetchSingleProduct } = useSingleProductContext();
  const { products, errorProd, loadingProd } = useProductContext();
  const navigate = useNavigate();

  const [selectedProd, setSelectedProd] = useState<Producto | undefined>();

  const handleSelectedProduct = (product?: Producto) => {
    setSelectedProd(product);
    if (product) fetchSingleProduct(product.id);
  };

  const handleRedirectProductList = () => {
    navigate("/productList");
  };


  const sortedItems = [...products].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div className="flex flex-col items-center bg-dark-gray rounded-t-[1rem] w-full flex-grow mt-8 gap-6">
      <div className="flex flex-row w-full items-center justify-between px-4 py-2">
        <Label className="text-black font-semibold text-[1.2rem]">Nuevos Productos</Label>
        <Button onClick={handleRedirectProductList} className="bg-blue text-surface-neutral">Ver todo</Button>
      </div>
      <div className="px-2">
        <Carousel className="w-full max-w-sm">
          <CarouselContent className="ml-2 mb-4">
            {loadingProd ? (<CarouselProductSkeleton />) : errorProd ? (<h1>Hubo un error intentelo de nuevo</h1>) : products.length === 0 ? (
              <h1>No hay productos disponibles</h1>
            )
              : sortedItems.slice(0).map((item, index) => (
                <CarouselItem key={index} className="pl-1 basis-[11rem]">
                  <Card onClick={() => handleSelectedProduct(item)}>
                    <CardContent className="flex flex-col flex-grow aspect-square p-1">
                      <div className="w-full h-3/4 relative">
                        <img
                          className="object-cover h-full w-full rounded-md border border-dark-gray relative"
                          src={item.imagen}
                          alt={`product-${index}`}
                        />
                        {/* <Heart className="h-4 w-4 top-2 right-2 absolute text-red"/> */}
                      </div>
                      <span className="font-semibold tracking-wide text-left">{item.titulo}</span>
                      {/* <div className="flex flex-wrap gap-2">
                      {item.categorias.map((categoria, index) => (
                        <Badge
                          key={index}
                          className="px-2 bg-dark-gray text-surface-neutral"
                        >
                          {categoria}
                        </Badge>
                      ))}
                    </div> */}
                      <br />
                      <div className="flex flex-row items-center justify-between">
                        <span className="text-[1.2rem] font-extrabold tracking-wide text-left">C${item.precio}</span>
                        <Heart className="h-6 w-6" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
      {selectedProd && (
        <ProductDetailComponent
          show={!!selectedProd}
          onClose={() => handleSelectedProduct(undefined)}
        />
      )}
    </div>
  );
}

export default HomeProductsComponent;