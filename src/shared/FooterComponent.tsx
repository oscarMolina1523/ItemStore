import { Heart, House, Phone, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const FooterComponent: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[4rem] flex items-center justify-around py-4 bg-surface-neutral z-10">
      <Link to="/home">
        <House className="h-6 w-6" />
      </Link>
      <Link to="/wishList">
        <Heart className="h-6 w-6" />
      </Link>
      <Link to="/contact">
        <Phone className="h-6 w-6" />
      </Link>
      <Link to="/profile">
        <User className="h-6 w-6" />
      </Link>
    </div>
  );
}

export default FooterComponent;