export interface Orden {
  id: number;
  fecha: string;
  nombre: string;
  total: number;
}

export interface Details {
  id: number;
  idOrden: number;
  idProducto: number;
  cantidad: number;
  subTotal:number
}

export interface DetailsOrder {
  details: Details[];
  orderId: number;
}