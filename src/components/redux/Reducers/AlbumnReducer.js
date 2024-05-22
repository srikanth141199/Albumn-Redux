import { createSlice } from "@reduxjs/toolkit"


const initialState = {

}

const albumnSlice = createSlice({
    name : "Albumn",
    initialState :  initialState,
    reducers : {
        updateItem : (state, action) => {

        },

        deleteItem : (state, action) => {

        },
    }
});

export const albumnReducer = albumnSlice.reducer;
export const {updateItem, deleteItem} = albumnSlice.actions;
export const albumnSelector = (state) => state.reducer;