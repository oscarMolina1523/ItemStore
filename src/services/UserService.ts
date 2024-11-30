import { DB_NAMES } from "@/models/db_models";
import { Usuario } from "@/models/EntitiesModel";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export const UserService = {
  /**
   * Crear un nuevo usuario
   */
  async createUser(uid: string, user: Usuario) {
    const userRef = doc(db, DB_NAMES.USERS, uid);
    await setDoc(userRef, { ...user });
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