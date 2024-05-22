import { configureStore } from "@reduxjs/toolkit";
import { albumnReducer } from "./Reducers/AlbumnReducer";


export const store = configureStore({
    reducer : {
        albumnReducer
    }
})