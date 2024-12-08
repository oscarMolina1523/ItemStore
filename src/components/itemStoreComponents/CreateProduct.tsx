import { useProductContext } from "@/context/ProductContext";
import useImageUpload from "@/hooks/useImageUpload";
import { Producto } from "@/models/EntitiesModel";
import { ProductService } from "@/services/ProductService";
import { X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface CreateProductComponentProps {
  show: boolean;
  onClose: () => void;
}

const CreateProductComponent: React.FC<CreateProductComponentProps> = ({
  show,
  onClose,
}) => {
  const { refetchProducts } = useProductContext();
  const { uploadImage, error } = useImageUpload();
  const [titulo, setTitulo] = useState<string>("");
  const [precio, setPrecio] = useState<string>("0");
  const [descripcion, setDescripcion] = useState<string>("");
  const [categorias, setCategorias] = useState<string[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleNewProduct = async () => {
    try {
      if (!titulo || !precio || !descripcion || categorias.length === 0) {
        alert("Todos los campos son obligatorios.");
        return;
      }

      const uploadedImageUrl = imageFile ? await uploadImage(imageFile) : null;
      if (error || !uploadedImageUrl) {
        alert("Error al subir la imagen.");
        return;
      }

      const newProduct: Producto = {
        id: '',
        titulo,
        categorias,
        precio,
        descripcion,
        imagen: uploadedImageUrl,
        createdAt: new Date().toISOString(),
      };

      await ProductService.createProduct(newProduct);
      setTitulo("");
      setCategorias([]);
      setPrecio("0");
      setDescripcion("");
      setImageFile(null);
      alert("Producto creado exitosamente");
      refetchProducts();
      onClose();
    } catch (error) {
      console.error("Error al crear el producto:", error);
      alert("Ocurrió un error al crear el producto.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files?.[0] || null);
  };

  const handleCategoriasChange = (value: string) => {
    // Convertir la entrada separada por comas en un array
    const categoriasArray = value.split(",").map((cat) => cat.trim());
    setCategorias(categoriasArray);
  };

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center overflow-y-auto bg-black bg-opacity-40 z-50 transition-opacity duration-500 ease-[cubic-bezier(0.42, 0, 0.58, 1)]">
      <Card className="w-full md:w-1/2 mt-40 bg-surface-neutral border">
        <CardDescription>
          <div className="flex flex-row items-center justify-between px-4 py-4 border-b-2 border-black text-black">
            <Label className="text-[1.2rem] font-semibold tracking-wide">Nuevo Producto</Label>
            <X onClick={onClose} />
          </div>
        </CardDescription>
        <div className="flex flex-col px-4 py-4 gap-2">
          <Label className="text-black text-[1.2rem] tracking-wide text-opacity-75 text-left font-semibold">
            Título
          </Label>
          <Input
            id="title"
            className="bg-dark-ocean-blue border text-black"
            placeholder="Título del producto..."
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="flex flex-col px-4 py-4 gap-2">
          <Label className="text-black text-[1.2rem] tracking-wide text-opacity-75 text-left font-semibold">
            Precio
          </Label>
          <Input
            id="precio"
            className="bg-dark-ocean-blue border text-black"
            placeholder="Precio del producto, solo ingresar numeros..."
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div className="flex flex-col px-4 py-4 gap-2">
          <Label className="text-left text-black text-[1.2rem] tracking-wide text-opacity-75 font-semibold">
            Categorías
          </Label>
          <Input
            id="categories"
            className="bg-dark-ocean-blue border text-black"
            placeholder="Categorías (separe por comas)..."
            onChange={(e) => handleCategoriasChange(e.target.value)}
          />
        </div>
        <div className="flex flex-row px-4 py-4 gap-4">
          <Label className="text-left text-black text-[1.2rem] tracking-wide text-opacity-75 font-semibold">
            Imagen
          </Label>
          <div className="flex items-center">
            <Input
              type="file"
              className="hidden"
              accept="image/*"
              id="fileInput"
              onChange={handleFileChange}
            />
            <Button
              className="bg-blue text-surface-neutral font-semibold hover:bg-surface-neutral hover:text-blue"
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              {imageFile ? `Archivo: ${imageFile.name}` : "Subir Imagen"}
            </Button>
          </div>
        </div>
        <div className="flex flex-col px-4 py-4 gap-2">
          <Label className="text-left text-black text-[1.2rem] tracking-wide text-opacity-75 font-semibold">
            Descripción
          </Label>
          <Textarea
            id="description"
            className="bg-dark-ocean-blue border text-black h-[10rem]"
            placeholder="Escribe una descripción..."
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-2 w-full items-center justify-end px-4 py-4">
          <Button
            className="bg-blue text-surface-neutral font-semibold hover:text-blue hover:border-blue hover:bg-surface-neutral"
            onClick={handleNewProduct}
          >
            Crear
          </Button>
          <Button
            className="text-surface-neutral bg-red font-semibold hover:text-red hover:bg-surface-neutral"
            onClick={onClose}
          >
            Cancelar
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CreateProductComponent;
