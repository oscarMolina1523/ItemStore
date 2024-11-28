import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";
import React from "react";

const HomeProductsComponent: React.FC = () => {

  const items = [
    {
      image: "https://images-cdn.ubuy.ae/6567e25a06139139127520a7-bxyjdj-men-39-s-running-shoes-walking.jpg",
      color: "red",
      price: "$50",
      title: "Air Max 2090",
    },
    {
      image: "https://olympicsa.co.za/wp-content/uploads/2024/02/01.Olympic-Bounce-Men-Blue-Feature-image-Side-A-1080px-x-1080px-jpg-600x600.webp",
      color: "blue",
      price: "$70",
      title: "Air Max 2090",
    },
    {
      image: "https://xeroshoes.com/wp-content/uploads/2024/06/DLLM-WHTE_Dillon-Leather_White_AngleR_0056_WEB-385x250.jpg",
      color: "white",
      price: "$100",
      title: "Air Max 2090",
    },
    {
      image: "https://xeroshoes.com/wp-content/uploads/2024/06/DLLM-WHTE_Dillon-Leather_White_AngleR_0056_WEB-385x250.jpg",
      color: "white",
      price: "$100",
      title: "Air Max 2090",
    },
    {
      image: "https://xeroshoes.com/wp-content/uploads/2024/06/DLLM-WHTE_Dillon-Leather_White_AngleR_0056_WEB-385x250.jpg",
      color: "white",
      price: "$100",
      title: "Air Max 2090",
    },
    {
      image: "https://xeroshoes.com/wp-content/uploads/2024/06/DLLM-WHTE_Dillon-Leather_White_AngleR_0056_WEB-385x250.jpg",
      color: "white",
      price: "$100",
      title: "Air Max 2090",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-dark-gray rounded-t-[2rem] w-full flex-grow mt-4">
      <div className="flex flex-row w-full items-center justify-between px-4 py-2">
        <Label className="text-black font-semibold text-[1.2rem]">Nuevos Productos</Label>
        <Button className="bg-blue text-surface-neutral">Ver todo</Button>
      </div>
      <div className="px-2">
        <Carousel className="w-full max-w-sm">
          <CarouselContent className="ml-2 mb-4">
            {items.map((item, index) => (
              <CarouselItem key={index} className="pl-1 basis-[11rem]">
                <Card>
                  <CardContent className="flex flex-col aspect-square p-1 flex-grow">
                    <div className="w-full h-3/4 relative">
                      <img
                        className="object-cover h-full w-full rounded-md border border-dark-gray relative"
                        src={item.image}
                        alt={`product-${index}`}
                      />
                      {/* <Heart className="h-4 w-4 top-2 right-2 absolute text-red"/> */}
                    </div>
                    <span className="text-[1.2rem] font-semibold tracking-wide text-left">{item.title}</span>
                    <div className="inline-flex">
                      <Badge className="inline-flex px-2 bg-dark-gray text-surface-neutral">{item.color}</Badge>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-[1.2rem] font-extrabold tracking-wide text-left">{item.price}</span>
                      <Heart className="h-6 w-6"/>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default HomeProductsComponent;