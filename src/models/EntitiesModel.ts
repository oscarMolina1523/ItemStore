export type Categoria = {
  id: string;
  nombre: string;
};

export interface Producto {
  id: string;
  titulo: string;
  categorias: string[];
  precio: string;
  descripcion: string;
  imagen: string;
  createdAt: string;
};

export interface Usuario {
  id: string;
  nombre: string;
  rol: string;
  descripcion: string;
  foto: string;
  listaDeseos: string[]; 
};