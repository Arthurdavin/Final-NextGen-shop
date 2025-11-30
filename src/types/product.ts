export interface Product {
  id: number;
  title?: string;
  price: number;
  originalPrice?: number;
  image: string;
  name?: string;
  rating: number;
  reviews: number;
  discount?: number;
  description?: string;
  category: string;
  inStock?: boolean;
}


export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  createdAt: Date;
}
