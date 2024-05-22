import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    albums : [],
    loading: false,
    error: null
}

export const dataFetchThunk = createAsyncThunk("Albumn/fetchDetails", async ()=>{
    try {
        const url = "https://jsonplaceholder.typicode.com/albums"
        const res = await fetch(url, {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify()
        });
        const result = await res.json()
        //console.log("result :", result);
        return result;

    } catch (error) {
        console.log(error);
    }
})

export const fetchAlbums = createAsyncThunk("albums/fetchAlbums", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    return data;
});


export const addAlbum = createAsyncThunk("albums/addAlbum", async (newAlbum) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAlbum)
    });
    const data = await response.json();
    return data;
});

export const updateAlbum = createAsyncThunk("albums/updateAlbum", async (updatedAlbum) => {
    console.log("update : ", updateAlbum);
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${updatedAlbum.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedAlbum)
    });
    const data = await response.json();
    return data;
});

export const deleteAlbum = createAsyncThunk("albums/deleteAlbum", async (albumId) => {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`, {
        method: "DELETE"
    });
    return albumId;
});


const albumSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlbums.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAlbums.fulfilled, (state, action) => {
                state.loading = false;
                state.albums = action.payload;
            })
            .addCase(fetchAlbums.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addAlbum.fulfilled, (state, action) => {
                state.albums.push(action.payload);
            })
            .addCase(updateAlbum.fulfilled, (state, action) => {
                const index = state.albums.findIndex(album => album.id === action.payload.id);
                if (index !== -1) {
                    state.albums[index] = action.payload;
                }
            })
            .addCase(deleteAlbum.fulfilled, (state, action) => {
                state.albums = state.albums.filter(album => album.id !== action.payload);
            });
    }
});

export const albumnReducer = albumSlice.reducer;
export const {updateItem, deleteItem} = albumSlice.actions;
export const albumnSelector = (state) => state.albumnReducer;