import { configureStore } from "@reduxjs/toolkit";
import  authSlice from "../Slice/Slice";
import formReducer from "../Slice/PersonalDetailsSlice"
 const store= configureStore({
    reducer:{
    auth:authSlice,
    form:formReducer
},
});

export default store;