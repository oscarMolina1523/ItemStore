import { Heart, House, ShoppingBag, User } from "lucide-react";
import React from "react";

const FooterComponent: React.FC = () => {
  return (
    <div className="flex flex-row items-center h-[4rem] w-full justify-around">
      <House className="h-6 w-6"/>
      <Heart className="h-6 w-6"/>
      <ShoppingBag className="h-6 w-6"/>
      <User className="h-6 w-6"/>
    </div>
  );
}

export default FooterComponent;