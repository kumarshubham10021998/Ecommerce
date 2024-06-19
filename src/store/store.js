import { configureStore } from "@reduxjs/toolkit";
import cardSlic from "./cardSlic";
import productSlice from "./productSlice";


const  store = configureStore({ 
    reducer:{
        cart: cardSlic,
        products:productSlice,
       
    }
})

export default store;