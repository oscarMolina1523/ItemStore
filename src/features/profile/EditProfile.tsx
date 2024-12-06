import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useImageUpload from "@/hooks/useImageUpload";
import { Usuario } from "@/models/EntitiesModel";
import { AuthService } from "@/services/AuthService";
import { UserService } from "@/services/UserService";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

interface EditProfileComponentProps {
  show: boolean;
  onClose: () => void;
}

const EditProfileComponent: React.FC<EditProfileComponentProps> = ({ show, onClose }) => {
  const { uploadImage } = useImageUpload();
  const [user, setUser] = useState<Usuario | null>(null);
  const [photo, setPhoto] = useState<string | undefined>();
  const [username, setUsername] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await AuthService.GetCurrentUser();
        if (currentUser) {
          const userData = await UserService.getUser(currentUser.uid);
          setUser(userData);
          if (userData) {
            setUsername(userData.nombre);
            setDescription(userData.descripcion || "");
            setPhoto(userData.foto || "");
          }
        }
      } catch {
        console.error("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
  };

  const handleSave = async () => {
    if (user && username && description) {
      const updatedUser = { ...user, nombre: username, descripcion: description, foto: photo };

      try {
        if (imageFile) {
          const uploadedImageUrl = await uploadImage(imageFile);
          if (uploadedImageUrl) {
            updatedUser.foto = uploadedImageUrl;
          }
        }
        await UserService.updateUser(user.id, updatedUser);
        onClose();
      } catch {
        console.error("Failed to update user data.");
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 z-50 transition-opacity duration-500 ease-[cubic-bezier(0.42, 0, 0.58, 1)]">
      <Card className="w-full md:w-1/2 mt-20 bg-surface-neutral border">
        <CardDescription>
          <div className="flex flex-row items-center justify-between px-4 py-4 border-b text-black">
            <Label className="text-[1.2rem] font-semibold tracking-wide">Editar Perfil</Label>
            <X onClick={onClose} />
          </div>
        </CardDescription>
        <div className="flex flex-col px-4 py-4">
          <div className="flex flex-col items-center gap-4">
            <img
              className="rounded-full object-cover h-[7rem] w-[7rem]"
              src={photo || "https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg"}
              alt="Profile"
            />
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="fileInput"
            />
            <Button onClick={() => document.getElementById("fileInput")?.click()}>
              {imageFile ? `File: ${imageFile.name}` : "Cargar imagen"}
            </Button>
          </div>
          <div className="flex flex-col md:flex-row border-b-2 border-black px-4 py-4 gap-2">
            <div className="flex flex-col items-start w-full md:w-1/4 h-full text-black">
              <Label className="text-[1.2rem] font-semibold tracking-wide">Nombre:</Label>
            </div>
            <div className="overflow-hidden flex flex-col w-full md:w-3/4 items-start gap-2">
              <Input
                className="bg-dark-ocean-blue text-black"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Label className="text-left text-black text-opacity-75">
                El nombre de usuario sólo puede contener letras, números, guiones bajos y puntos.
              </Label>
            </div>
          </div>
          <div className="flex flex-col md:flex-row border-b-2 border-black px-4 py-4 gap-2">
            <div className="flex flex-col items-start w-full md:w-1/4 h-full text-black">
              <Label className="text-[1.2rem] font-semibold tracking-wide">Descripcion corta:</Label>
            </div>
            <div className="overflow-hidden flex flex-col w-full md:w-3/4 items-start gap-2">
              <Textarea
                maxLength={150}
                placeholder="Descripcion corta acerca de ti...."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-dark-ocean-blue text-black h-[6rem]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 w-full items-start justify-end px-4 py-4">
          <Button
            onClick={handleSave}
            className="bg-blue text-surface-neutral rounded hover:text-blue hover:font-semibold tracking-wide hover:bg-surface-neutral hover:border-surface-neutral"
          >
            Guardar
          </Button>
          <Button
            onClick={onClose}
            className="bg-red text-surface-neutral rounded hover:text-red hover:font-semibold tracking-wide hover:bg-surface-neutral hover:border-red"
          >
            Cancelar
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default EditProfileComponent;
