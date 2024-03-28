export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    quantity?: number;
    wishlist?: boolean;
  };