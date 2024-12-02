import { Producto } from "@/models/EntitiesModel";
import { User } from "firebase/auth";

export type AuthContextType = {
  user: User | null;  //este es el usuario de authentication no el modelo de firestore, si puede ser null si no esta authenticado
  loadingAuth: boolean;
};

export type ProductContextType = {
  products: Producto[];
  loadingProd:boolean;
  errorProd?:string;
  refetchProducts:()=>Promise<void>;
};

export type SingleProductContextType = {
  product: Producto |null | undefined ;
  loadingProd: boolean;
  errorProd?: string;
  fetchSingleProduct: (productId: string) => Promise<void>;
};
