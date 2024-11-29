import { DB_NAMES } from "@/models/db_models";
import { Usuario } from "@/models/EntitiesModel";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export const UserService = {
  /**
   * Crear un nuevo usuario
   */
  async createUser(usuario: Omit<Usuario, 'id'>): Promise<Usuario> {
    const usersRef = collection(db, DB_NAMES.USERS);
    const docRef = await addDoc(usersRef, { ...usuario });

    // Asignar el ID generado al modelo del usuario
    const newUser: Usuario = { ...usuario, id: docRef.id };
    await updateDoc(docRef, { id: docRef.id });
    return newUser;
  },

  /**
   * Obtener un usuario por ID
   */
  async getUser(userId: string): Promise<Usuario | null> {
    const userRef = doc(db, DB_NAMES.USERS, userId);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) return null;

    return { id: docSnap.id, ...docSnap.data() } as Usuario;
  },

  /**
   * Obtener todos los usuarios
   */
  async getUsers(): Promise<Usuario[]> {
    const usersRef = collection(db, DB_NAMES.USERS);
    const querySnapshot = await getDocs(usersRef);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Usuario[];
  },

  /**
   * Actualizar un usuario por ID
   */
  async updateUser(userId: string, updatedData: Partial<Omit<Usuario, 'id'>>): Promise<void> {
    const userRef = doc(db, DB_NAMES.USERS, userId);
    await updateDoc(userRef, { ...updatedData });
  },

  /**
   * Eliminar un usuario por ID
   */
  async deleteUser(userId: string): Promise<void> {
    const userRef = doc(db, DB_NAMES.USERS, userId);
    await deleteDoc(userRef);
  },

  /**
   * Agregar un producto a la lista de deseos de un usuario
   */
  async addProductToWishlist(userId: string, productId: string): Promise<void> {
    const user = await this.getUser(userId);
    if (user) {
      const updatedWishlist = [...user.listaDeseos, productId];
      await this.updateUser(userId, { listaDeseos: updatedWishlist });
    }
  },

  /**
   * Eliminar un producto de la lista de deseos de un usuario
   */
  async removeProductFromWishlist(userId: string, productId: string): Promise<void> {
    const user = await this.getUser(userId);
    if (user) {
      const updatedWishlist = user.listaDeseos.filter(id => id !== productId);
      await this.updateUser(userId, { listaDeseos: updatedWishlist });
    }
  },
};