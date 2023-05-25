import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../src/redux/authSlice";


const store = configureStore({
    reducer: {
        user: authSlice
    }
   
})

export default store;