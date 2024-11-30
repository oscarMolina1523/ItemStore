export type Categoria = {
  id: string;
  nombre: string;
};

export interface Producto {
  id: string;
  titulo: string;
  categorias: string[];
  precio: number;
  descripcion: string;
  imagen: string;
};

export interface Usuario {
  nombre: string;
  rol: string;
  descripcion: string;
  foto: string;
  listaDeseos: string[]; 
};