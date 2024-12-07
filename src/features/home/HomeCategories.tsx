import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useProductContext } from "@/context/ProductContext";
import { useSingleProductContext } from "@/context/SingleProductContext";
import { Producto } from "@/models/EntitiesModel";
import ProductComponent from "@/shared/ProductComponent";
import ProductDetailComponent from "@/shared/ProductDetailComponent";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeCategoriesComponent: React.FC = () => {

  const { loadingProd, products, errorProd } = useProductContext();
  const { fetchSingleProduct } = useSingleProductContext();
  const [selectedProd, setSelectedProd] = useState<Producto | undefined>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleProd] = useState<number>(3);
  const navigate = useNavigate();

  const handleRedirectProductList = () => {
    navigate("/productList");
  };

  const handleSelectedProduct = (product?: Producto) => {
    setSelectedProd(product);
    if (product) fetchSingleProduct(product.id);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) =>
      product.categorias.some((categoria) =>
        categoria.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    )
    : products;

  return (
    <div className="flex flex-col gap-4 w-full md:w-3/4 h-full mt-4 md:mt-[6rem] px-2">
      <div className="flex flex-row w-full items-center justify-center gap-6">
        <div className="flex flex-col gap-2">
          <Button onClick={() => setSelectedCategory("hombre")} className="bg-sky-blue h-[3rem] hover:bg-gray ">
            <img src="https://i.ibb.co/FDLT3rc/men.png" alt="men-img" />
          </Button>
          <Label className="text-black font-semibold">Hombre</Label>
        </div>
        <div className="flex flex-col gap-2">
          <Button onClick={() => setSelectedCategory("mujer")} className="bg-sky-blue h-[3rem] hover:bg-gray">
            <img src="https://i.ibb.co/g4D0Qmx/women.png" alt="women-img" />
          </Button>
          <Label className="text-black font-semibold">Mujer</Label>
        </div>
        <div className="flex flex-col gap-2">
          <Button onClick={() => setSelectedCategory("niños")} className="bg-sky-blue h-[3rem] hover:bg-gray">
            <img src="https://i.ibb.co/GpGzCkd/child.png" alt="child-img" />
          </Button>
          <Label className="text-black font-semibold">Niños</Label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full">
        {loadingProd ? (
          <h1>Loading</h1>
        ) : errorProd ? (
          <div>error products</div>
        ) : filteredProducts.slice(0, visibleProd).map((product) => (
          <ProductComponent
            key={product.id}
            category={product.categorias}
            title={product.titulo}
            imageUrl={product.imagen}
            onClick={() => handleSelectedProduct(product)}
          />
        ))
        }
      </div>
      <div className="flex flex-row w-full items-center justify-center gap-1">
        <Button onClick={handleRedirectProductList} className="bg-blue text-surface-neutral">
          Ver Más
          <ArrowRight className="ml-2" />
        </Button>
      </div>
      {selectedProd && (
        <ProductDetailComponent
          show={!!selectedProd}
          onClose={() => handleSelectedProduct(undefined)}
        />
      )}
    </div>
  );
}

export default HomeCategoriesComponent;