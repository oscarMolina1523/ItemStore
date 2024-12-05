import { Producto } from "@/models/EntitiesModel";
import { ProductService } from "@/services/ProductService";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ProductContextType } from "./TypesContext";

const ProductContext = createContext<ProductContextType | undefined>(undefined); //contexto y typo de post 

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProduct] = useState<Producto[]>([]);
  const [loadingProd, setLoading] = useState<boolean>(true);
  const [errorProd, setError] = useState<string>();

  const refetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const allProducts = await ProductService.getProducts();
      setProduct(allProducts);
      setError(undefined);
    } catch (error) {
      setError("Error fetching products: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setLoading(false);
    }
  }, []);



  useEffect(() => {
    refetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, errorProd, loadingProd, refetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};