export interface Producto {
  id: string;
  titulo: string;
  categorias: string[];
  color: string;
  precio: number;
  descripcion: string;
  imagen: string;
};

export interface Usuario {
  id: string;
  nombre: string;
  descripcion: string;
  foto: string;
  listaDeseos: string[]; 
};