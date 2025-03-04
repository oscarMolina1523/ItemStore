import CreateProductComponent from "@/components/itemStoreComponents/CreateProduct";
import EditProductComponent from "@/components/itemStoreComponents/EditProduct";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { useProductContext } from "@/context/ProductContext";
import { useSingleProductContext } from "@/context/SingleProductContext";
import { Producto } from "@/models/EntitiesModel";
import { ProductService } from "@/services/ProductService";
import ProductDetailComponent from "@/shared/ProductDetailComponent";
import ProductProfileComponent from "@/shared/ProductProfileComponent";
import { ArrowLeft, Plus } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManageProductsPage: React.FC = () => {
  const { fetchSingleProduct } = useSingleProductContext();
  const { products, loadingProd, errorProd, refetchProducts } = useProductContext();
  const [visibleProducts, setVisibleProducts] = useState<number>(12);
  const [search, setSearch] = useState<string>("");
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]); 
  const [newProduct, setNewProduct] = useState(false);
  const [editProd, setEditProd]=useState<Producto| null>(null);

  const handleNewProductClick = () => {
    setNewProduct(!newProduct);
  }

  const sortedProducts = [...products].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });


  const filteredProducts = sortedProducts.filter((product) =>
    product.categorias.some((cat) =>
      cat.toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);

    if (value.trim() === "") {
      setFilteredCategories([]);
      return;
    }

    const categories = products
      .flatMap((product) => product.categorias.map((cat) => cat.trim()))
      .filter((category, index, self) => self.indexOf(category) === index)
      .filter((category) => category.toLowerCase().includes(value.toLowerCase()));

    setFilteredCategories(categories);
  };

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12);
  };

  const [selectedProd, setSelectedProd] = useState<Producto | undefined>();

  const handleSelectedProduct = (product?: Producto) => {
    setSelectedProd(product);
    if (product) fetchSingleProduct(product.id);
  };

  const handleDeleteClick = (postId: string) => {
    ProductService.deleteProduct(postId);
    refetchProducts();
  };

  const handleEditClick = (post: Producto) => {
    setEditProd(post);
  };

  return (
    <div className="w-full flex flex-col gap-4 bg-surface-neutral dark:bg-dark-ocean-blue items-center px-2 py-6">
      <div className="flex flex-col items-center w-full gap-4 md:hidden">
        <Link to="/profile" className="flex flex-row gap-4 items-center w-full fixed top-0 left-0 right-0 z-20 h-[4rem] bg-surface-neutral mb-6">
          <ArrowLeft className="h-8 w-8" />
          <Label className="text-[1.5rem] text-black font-semibold tracking-wide">Administrador de productos</Label>
        </Link>
      </div>
      <CreateProductComponent show={newProduct} onClose={handleNewProductClick} />
      <div className="mt-[3rem]">
        <Button onClick={handleNewProductClick} className="bg-blue font-semibold tracking-wide text-surface-neutral"><Plus className="h-8 w-8"/>Nuevo producto</Button>
      </div>
      <Command className="rounded-lg border w-full md:w-3/4 bg-surface-neutral text-dark-ocean-blue dark:bg-dark-ocean-blue dark:text-surface-neutral">
        <CommandInput
          className="bg-surface-neutral text-dark-ocean-blue dark:bg-dark-ocean-blue dark:text-surface-neutral"
          placeholder="Buscar por categorias..."
          value={search}
          onValueChange={(value) => handleSearchChange(value)}
        />
        <CommandList>
          {filteredCategories.length === 0 && search.trim() ? (
            <CommandEmpty>La catergorias buscadas no se encontraron.</CommandEmpty>
          ) : (
            <CommandGroup>
              {filteredCategories.map((category, index) => (
                <CommandItem
                  key={index}
                  onSelect={() => setSearch(category)}
                >
                  {category}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </Command>

      <div className="flex flex-col w-full md:w-3/4 gap-4 mb-4 md:mt-4">
        <Label className="text-left text-dark-ocean-blue dark:text-surface-neutral font-semibold tracking-wide">
          Todos los productos
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full">
          {loadingProd ? (
            <h1>Loading</h1>
          ) : errorProd ? (
            <div>error products</div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.slice(0, visibleProducts).map((product) => (
              <ProductProfileComponent
                category={product.categorias}
                title={product.titulo}
                imageUrl={product.imagen}
                onClick={() => handleSelectedProduct(product)}
                onDeleteClick={() => handleDeleteClick(product.id)}
                onEditClick={()=>handleEditClick(product)}
              />
            ))
          ) : (
            <div>Producto no encontrado.</div>
          )}
        </div>
      </div>
      <div className="mb-10">
        <Button
          onClick={handleLoadMore}
          className="bg-blue hover:bg-surface-neutral hover:shadow-lg dark:bg-dark-ocean-blue border border-surface-neutral text-surface-neutral dark:hover:bg-surface-neutral hover:text-black hover:font-semibold"
        >
          Ver más
        </Button>
      </div>
      {selectedProd && (
        <ProductDetailComponent
          show={!!selectedProd}
          onClose={() => handleSelectedProduct(undefined)}
        />
      )}
       {editProd && ( 
        <EditProductComponent 
          show={!!editProd} 
          onClose={() => setEditProd(null)} 
          productToEdit={editProd} 
        />
        )}

    </div>
  );
};

export default ManageProductsPage;
