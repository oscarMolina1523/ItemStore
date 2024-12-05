import { HomePrincipalSkeleton } from "@/components/skeletons/HomePrincipalSkeleton";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuthContext } from "@/context/AuthContext";
import { Usuario } from "@/models/EntitiesModel";
import { AuthService } from "@/services/AuthService";
import { UserService } from "@/services/UserService";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditProfileComponent from "./EditProfile";

const ProfilePage: React.FC = () => {
  const { user, loadingAuth } = useAuthContext();
  const [data, setUser] = useState<Usuario | null>(null);
  const [editProfile, setEditProfile] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (!user) return;
      const usuario = await UserService.getUser(user.uid);
      setUser(usuario);
    }

    fetchUser();
  }, [user]);


  const handleEditProfileClick = () => {
    setEditProfile(!editProfile);
  }

  const handleLogout = async () => {
    await AuthService.LogoutService();
    navigate("/login");
  }


  if (!data) return;

  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <div className="flex flex-col items-center w-full gap-4 ">
        <Link to="/home" className="flex flex-row gap-4 items-center w-full fixed top-0 left-0 right-0 z-20 h-[4rem] bg-surface-neutral mb-6">
          <ArrowLeft className="h-8 w-8" />
          <Label className="text-[1.5rem] text-black font-semibold tracking-wide">Mi Perfil</Label>
        </Link>
      </div>
      <div className="flex flex-col items-center mt-[5rem]">
        <div className="w-full flex flex-row gap-2 border-b-2">
          {loadingAuth ? (<HomePrincipalSkeleton />) : user ? (
            <div className="flex flex-row w-full gap-2">
              <div className="w-1/3 py-2">
                <img className="object-cover w-full h-full"
                  src={data.foto}
                  alt="profile-img" />
              </div>
              <div className="w-2/3 flex flex-col gap-2 items-start pb-2">
                <Label className="text-[1.5rem] tracking-wide font-semibold text-black">{data.nombre}</Label>
                <Button onClick={handleEditProfileClick} className="bg-blue font-semibold tracking-wide border border-blue text-surface-neutral h-[3rem]">Editar cuenta</Button>
              </div>
            </div>
          ):null}
        </div>
        <Link to="/manageProduct" className="h-[4rem] border-b-2 border-dark-gray w-full flex items-center justify-start">
          <Label className="text-[1.2rem] tracking-wide font-semibold text-black">Administrar Productos</Label>
        </Link>
        <div onClick={handleLogout} className="h-[4rem] border-b-2 border-dark-gray w-full flex items-center justify-start">
          <Label className="text-[1.2rem] tracking-wide font-semibold text-black">Cerrar Sesion</Label>
        </div>
      </div>
      <EditProfileComponent show={editProfile} onClose={handleEditProfileClick} />
    </div>
  );
}

export default ProfilePage;