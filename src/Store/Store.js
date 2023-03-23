import { configureStore } from "@reduxjs/toolkit";
import  authSlice from "../Slice/Slice";

 const store= configureStore({
    reducer:{
    auth:authSlice
},
});

export default store;