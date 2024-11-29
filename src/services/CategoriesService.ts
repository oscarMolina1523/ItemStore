import { DB_NAMES } from "@/models/db_models"; 
import { Categoria } from "@/models/EntitiesModel";

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

export const CategoryService = {
  /**
   * Crear una nueva categoría
   */
  async createCategory(categoria: Omit<Categoria, 'id'>): Promise<Categoria> {
    const categoriesRef = collection(db, DB_NAMES.CATEGORIES);
    const docRef = await addDoc(categoriesRef, { ...categoria });
    
    // Asignar el ID generado al modelo de la categoría
    const newCategory: Categoria = { ...categoria, id: docRef.id };
    await updateDoc(docRef, { id: docRef.id });
    return newCategory;
  },

  /**
   * Obtener una categoría por ID
   */
  async getCategory(categoryId: string): Promise<Categoria | null> {
    const categoryRef = doc(db, DB_NAMES.CATEGORIES, categoryId);
    const docSnap = await getDoc(categoryRef);

    if (!docSnap.exists()) return null;

    return { id: docSnap.id, ...docSnap.data() } as Categoria;
  },

  /**
   * Obtener todas las categorías
   */
  async getCategories(): Promise<Categoria[]> {
    const categoriesRef = collection(db, DB_NAMES.CATEGORIES);
    const querySnapshot = await getDocs(categoriesRef);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Categoria[];
  },

  /**
   * Actualizar una categoría por ID
   */
  async updateCategory(categoryId: string, updatedData: Partial<Omit<Categoria, 'id'>>): Promise<void> {
    const categoryRef = doc(db, DB_NAMES.CATEGORIES, categoryId);
    await updateDoc(categoryRef, { ...updatedData });
  },

  /**
   * Eliminar una categoría por ID
   */
  async deleteCategory(categoryId: string): Promise<void> {
    const categoryRef = doc(db, DB_NAMES.CATEGORIES, categoryId);
    await deleteDoc(categoryRef);
  },
};