import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { Producto } from "@/models/EntitiesModel";
import { ProductService } from "@/services/ProductService";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePrincipalComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const prod = await ProductService.getProducts();
        setItems(prod);
      } catch (error) {
        console.log("Failed to obtain products", error);
      }
    };

    fetchProducts();
  }, [setItems]);

  // const items = [
  //   {
  //     image: "https://images-cdn.ubuy.ae/6567e25a06139139127520a7-bxyjdj-men-39-s-running-shoes-walking.jpg",
  //     label: "Popular",
  //     title: "Air Max 2090",
  //   },
  //   {
  //     image: "https://olympicsa.co.za/wp-content/uploads/2024/02/01.Olympic-Bounce-Men-Blue-Feature-image-Side-A-1080px-x-1080px-jpg-600x600.webp",
  //     label: "Popular",
  //     title: "Air Max 2090",
  //   },
  //   {
  //     image: "https://xeroshoes.com/wp-content/uploads/2024/06/DLLM-WHTE_Dillon-Leather_White_AngleR_0056_WEB-385x250.jpg",
  //     label: "Popular",
  //     title: "Air Max 2090",
  //   },
  // ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval); // Limpieza para evitar fugas de memoria
  }, [items.length]);

  return (
    <div className="flex flex-col items-center h-[20rem] w-full relative">
      <div className="w-full h-4/5 bg-blue rounded-b-[3rem]"></div>
      <div className="flex flex-col absolute items-center justify-center w-full gap-4 px-3 flex-grow translate-y-1/7 bottom-6">
        <Link to="/search" className="w-full">
          <Button className="w-full h-[3rem] flex flex-row justify-start items-center bg-gray text-dark-gray">
            <Search />
            Search...
          </Button>
        </Link>
        <div className="w-full">
          <Carousel className="bg-surface-neutral rounded-lg py-2 px-2 flex flex-col items-center shadow-lg">
            <CarouselContent className="w-full">
              {items.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={`flex flex-row w-full ${currentIndex === index ? "flex" : "hidden"}`}
                >
                  <div className="w-3/5">
                    <img
                      className="object-cover h-[8rem] w-full rounded-md border border-dark-gray"
                      src={item.imagen}
                      alt={`product-${index}`}
                    />
                  </div>
                  <div className="w-2/5 flex flex-col gap-1 items-start text-left pl-1 p-0">
                    <Label className="text-black font-semibold">
                      C${item.precio}
                    </Label>
                    <Label className="text-black font-extrabold text-[1.2rem] flex-wrap ">
                      {item.titulo}
                    </Label>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden justify-center gap-2 absolute bottom-0 translate-y-3/4 py-4">
              <CarouselPrevious
                onClick={() =>
                  setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
                }
                className="border border-transparent bg-transparent"
              />
              <CarouselNext
                onClick={() =>
                  setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
                }
                className="border border-transparent bg-transparent"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePrincipalComponent;
