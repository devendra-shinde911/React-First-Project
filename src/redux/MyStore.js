import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/slice/cartSlice'
import filterReducer from '../redux/slice/filterSlice'


const Mystore = configureStore({

    reducer:{
        cart: cartReducer,
        filter: filterReducer
    }
 
 })

export default Mystore;