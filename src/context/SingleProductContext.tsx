import { Producto } from "@/models/EntitiesModel";
import { ProductService } from "@/services/ProductService";
import React, { createContext, useCallback, useContext, useState } from "react";
import { SingleProductContextType } from "./TypesContext";

const SingleProductContext = createContext<SingleProductContextType | undefined>(undefined);

export const SingleProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [product, setProduct] = useState<Producto | undefined>(undefined);
  const [loadingProd, setLoading] = useState<boolean>(false);
  const [errorProd, setError] = useState<string | undefined>(undefined);

  const fetchSingleProduct = useCallback(async (productId: string) => {
    setLoading(true);
    setError(undefined); 
    try {
      const singleProduct = await ProductService.getProduct(productId);
      if (singleProduct) {
        setProduct(singleProduct);
      }
    } catch (error) {
      setError("Error fetching single product: " + error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <SingleProductContext.Provider value={{ product, loadingProd, errorProd, fetchSingleProduct }}>
      {children}
    </SingleProductContext.Provider>
  );
};

export const useSingleProductContext = () => {
  const context = useContext(SingleProductContext);
  if (!context) {
    throw new Error("useSingleProductContext must be used within a SingleProductProvider");
  }
  return context;
};