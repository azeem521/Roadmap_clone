import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isOpen:false
}

const modalSlice = createSlice({
    name:'ModalSlice',
    initialState,
    reducers:{
        modalHandler:(state,action)=>{
            state.isOpen=!state.isOpen
        }
    }
})

export const modalSliceAction = modalSlice.actions;
export default modalSlice.reducer