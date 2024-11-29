import CreateProductComponent from "@/components/itemStoreComponents/CreateProduct";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const [newProduct, setNewProduct]= useState(false);

  const handleNewProductClick=()=>{
    setNewProduct(!newProduct);
  }

  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <div className="flex flex-col items-center w-full gap-4 ">
        <Link to="/home" className="flex flex-row gap-4 shadow-lg items-center w-full fixed top-0 left-0 right-0 z-20 h-[4rem] bg-surface-neutral mb-6">
          <ArrowLeft className="h-8 w-8" />
          <Label className="text-[1.5rem] text-black font-semibold tracking-wide">Mi Perfil</Label>
        </Link>
      </div>
      <div className="flex flex-col items-center mt-[5rem]">
        <div className="w-full flex flex-row gap-2 border-b-2">
          <div className="w-1/3 py-2 ">
            <img className="object-cover w-full h-full"
              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_1200x1200/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=1-9sfjwH"
              alt="profile-img" />
          </div>
          <div className="w-2/3 flex flex-col gap-2 items-start">
            <Label className="text-[1.5rem] tracking-wide font-semibold text-black">Luka Marjanovic</Label>
            <Button className="bg-gray border border-dark-gray text-dark-gray h-[3rem]">Editar cuenta</Button>
          </div>
        </div>
        <div className="h-[4rem] border-b-2 border-dark-gray w-full flex items-center justify-start">
          <Label className="text-[1.2rem] tracking-wide font-semibold text-black">Detalles de la cuenta</Label>
        </div>
        <div className="h-[4rem] border-b-2 border-dark-gray w-full flex items-center justify-start">
          <Label className="text-[1.2rem] tracking-wide font-semibold text-black">Administrar Productos</Label>
        </div>
        <div onClick={handleNewProductClick} className="h-[4rem] border-b-2 border-dark-gray w-full flex items-center justify-start">
          <Label className="text-[1.2rem] tracking-wide font-semibold text-black">Nuevo Producto</Label>
        </div>
        <div className="h-[4rem] border-b-2 border-dark-gray w-full flex items-center justify-start">
          <Label className="text-[1.2rem] tracking-wide font-semibold text-black">Cerrar Sesion</Label>
        </div>
      </div>
      <CreateProductComponent show={newProduct} onClose={handleNewProductClick}/>
    </div>
  );
}

export default ProfilePage;