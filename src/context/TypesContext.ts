import { User } from "firebase/auth";

export type AuthContextType = {
    user: User | null;  //este es el usuario de authentication no el modelo de firestore, si puede ser null si no esta authenticado
    loadingAuth: boolean;
};