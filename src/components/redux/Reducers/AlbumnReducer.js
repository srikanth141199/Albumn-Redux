import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    albumnData : []
}

export const dataFetchThunk = createAsyncThunk("Albumn/fetchDetails", async ()=>{
    try {
        const url = "https://jsonplaceholder.typicode.com/albums"
        const res = await fetch(url);
        const result = await res.json()
        //console.log("result :", result);
        return result;

    } catch (error) {
        console.log(error);
    }
})

const albumnSlice = createSlice({
    name : "Albumn",
    initialState :  initialState,
    reducers : {
        updateItem: (state, action) => {
            const { id, userId, title } = action.payload;
            const tempArray = state.albumnData;
            const index = tempArray.findIndex(item => item.id === id);
          
            if (index !== -1) {
              tempArray[index] = { ...tempArray[index], id, userId, title };
            }

            state.albumnData = tempArray;
          },

        deleteItem : (state, action) => {
            state.albumnData = state.albumnData.filter(item => item.id !== action.payload)//we wi9ll get id of the Item from payload
        },
    },
    extraReducers : (builder) => {
        builder.addCase(dataFetchThunk.fulfilled, (state, action) => {
            state.albumnData = action.payload
            console.log("albumn Data : ", state.albumnData);
        })
    }
});

export const albumnReducer = albumnSlice.reducer;
export const {updateItem, deleteItem} = albumnSlice.actions;
export const albumnSelector = (state) => state.albumnReducer;