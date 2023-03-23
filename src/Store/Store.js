import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../Slice/Slice"

 const store= configureStore({
    reducer:{
    auth:authreducer
},
});

export default store;