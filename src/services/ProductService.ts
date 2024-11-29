import { DB_NAMES } from "@/models/db_models";
import { Producto } from "@/models/EntitiesModel";
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

export const ProductService = {
  /**
   * Crear un nuevo producto
   */
  async createProduct(producto: Omit<Producto, 'id'>): Promise<Producto> {
    const productsRef = collection(db, DB_NAMES.PRODUCTS);
    const docRef = await addDoc(productsRef, { ...producto });

    // Asignar el ID generado al modelo del producto
    const newProduct: Producto = { ...producto, id: docRef.id };
    await updateDoc(docRef, { id: docRef.id });
    return newProduct;
  },

  /**
   * Obtener un producto por ID
   */
  async getProduct(productId: string): Promise<Producto | null> {
    const productRef = doc(db, DB_NAMES.PRODUCTS, productId);
    const docSnap = await getDoc(productRef);

    if (!docSnap.exists()) return null;

    return { id: docSnap.id, ...docSnap.data() } as Producto;
  },

  /**
   * Obtener todos los productos
   */
  async getProducts(): Promise<Producto[]> {
    const productsRef = collection(db, DB_NAMES.PRODUCTS);
    const querySnapshot = await getDocs(productsRef);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Producto[];
  },

  /**
   * Actualizar un producto por ID
   */
  async updateProduct(productId: string, updatedData: Partial<Omit<Producto, 'id'>>): Promise<void> {
    const productRef = doc(db, DB_NAMES.PRODUCTS, productId);
    await updateDoc(productRef, { ...updatedData });
  },

  /**
   * Eliminar un producto por ID
   */
  async deleteProduct(productId: string): Promise<void> {
    const productRef = doc(db, DB_NAMES.PRODUCTS, productId);
    await deleteDoc(productRef);
  },
};