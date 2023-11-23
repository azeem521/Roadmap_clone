import { configureStore } from "@reduxjs/toolkit";
import modalSlice from '../state mangement/modalSlice'


const store = configureStore({
    reducer:{
        modalSlice,
    }

})

export default store;