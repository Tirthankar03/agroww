import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product } from "../../libs/type";
import { toast } from 'sonner';


type ProductState = {
  products: Product[]
  wishlist: Product[]; 
}



const initialState: ProductState = {
  products: [],
  wishlist: [],
}

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      //add to cart implementation
    addToCart: (state, action:PayloadAction<Product>) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product && product.quantity && action.payload.quantity) {
        product.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      console.log("products>>>>>>>", state.products);
      

      toast.success("Product added to cart");
    },
    increaseCount: (state, action:PayloadAction<Product>) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product && product.quantity && action.payload.quantity) {
        product.quantity++;
        toast.success("quantity increased!");

      }
    },
    decreaseCount: (state, action:PayloadAction<Product>) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product && action.payload.quantity && product?.quantity === 1) {
        product.quantity = 1;
      } else {
        product.quantity--;
        toast.success("quantity decreased!");

      }
    },
    deleteProduct: (state, action:PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      toast.error("Product removed from cart");
    },
    resetCart: (state) => {
      state.products = [];
      toast.success("cart reset succesfully");
    },
    // wishlist implementation 
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const product = state.wishlist.find(
        (product) => product.id === action.payload.id
      );
      if (!product) {
        state.wishlist.push(action.payload);
        toast.success("Product added to wishlist");
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.wishlist = state.wishlist.filter(
        (product) => product.id !== action.payload
      );
      toast.error("Product removed from wishlist");
    },
  },
  },
);

export default ProductSlice.reducer;
export const { addToCart, increaseCount, decreaseCount, deleteProduct, resetCart, addToWishlist, removeFromWishlist  }=ProductSlice.actions;