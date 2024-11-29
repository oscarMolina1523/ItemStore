import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Search, Trash } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const WishListPage: React.FC = () => {

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
    <div className="flex flex-col items-center w-full px-4">
      <div className="flex flex-col items-center w-full gap-4 ">
        <Link to="/home" className="flex flex-row gap-4 items-center w-full fixed top-0 left-0 right-0 z-20 h-[4rem] bg-surface-neutral mb-6">
          <ArrowLeft className="h-8 w-8" />
          <Label className="text-[1.5rem] text-black font-semibold tracking-wide">Lista de Deseos</Label>
        </Link>
        <div className="w-full mt-[5rem]">
          <Button className="w-full h-[3rem] flex flex-row justify-start border items-center bg-gray text-dark-gray">
            <Search />
            Search...
          </Button>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          {items.map((item, index) => (
            <Card className="w-full">
              <CardContent key={index} className="p-1 flex flex-row">
                <div className="w-1/2 h-full">
                  <img
                    className="object-cover h-[8rem] w-full rounded-md border border-dark-gray"
                    src={item.image}
                    alt="image-card"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-1 items-start text-left pl-1">
                  <Label className="text-black font-semibold text-[1.2rem]">
                    {item.title}
                  </Label>
                  <div className="inline-flex">
                    <Badge className="inline-flex px-2 bg-dark-gray text-surface-neutral">{item.color}</Badge>
                  </div>
                  <Label className="text-black font-extrabold text-[1.2rem]">
                    {item.price}
                  </Label>
                  <div className="w-full flex justify-end">
                    <Trash className="h-6 w-6 text-red" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WishListPage;