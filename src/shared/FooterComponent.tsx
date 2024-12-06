import { useAuthContext } from "@/context/AuthContext";
import { Heart, House, Phone, User } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertAuthComponent from "./AlertAuthComponent";

const FooterComponent: React.FC = () => {
  const { user } = useAuthContext();
  const [notAuthenticated, setNotAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/home");
  }

  const handleClickWishList = () => {
    if (user) {
      setNotAuthenticated(false);
      navigate("/wishList");
    }
    else {
      setNotAuthenticated(true);
    }
  }

  const handleClickContact = () => {
    navigate("/contact");
  }

  const handleClickProfile = () => {
    if (user) {
      setNotAuthenticated(false);
      navigate("/profile");
    }
    else {
      setNotAuthenticated(true);
    }
  }

  return (
    <div className="fixed bottom-0 left-0 w-full h-[4rem] flex items-center justify-around py-4 bg-surface-neutral z-10">
      <div onClick={handleClickHome}>
        <House className="h-6 w-6" />
      </div>
      <div onClick={handleClickWishList}>
        <Heart className="h-6 w-6" />
      </div>
      <div onClick={handleClickContact}>
        <Phone className="h-6 w-6" />
      </div>
      <div onClick={handleClickProfile}>
        <User className="h-6 w-6" />
      </div>
      {notAuthenticated && (<AlertAuthComponent show={notAuthenticated} onClose={() => setNotAuthenticated(false)} />)}
    </div>
  );
}

export default FooterComponent;