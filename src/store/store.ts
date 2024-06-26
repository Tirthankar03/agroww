import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./features/productSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store= configureStore({
    reducer: {
        product: ProductSlice.reducer
    }
})


//App dispatch to dispatch our actions to the store
//app selector which is used to retrive data from the store

//need to write these lines to make them work in ts
export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
