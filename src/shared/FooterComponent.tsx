import { Heart, House, Phone, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const FooterComponent: React.FC = () => {
  return (
    <div className="flex flex-row items-center h-[4rem] w-full justify-around mt-auto py-4">
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