import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations";

const handlePending = state => {
    state.error = false;
    state.loading = true;
}
        
const handleRejected = state => {
    state.loading = false;
    state.error = true;
}

const slice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        item:null,
        loading: false,
        error: null,
    },
    extraReducers: builder => {
        builder.addCase(fetchCampers.pending, handlePending)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.items = action.payload.items;
                state.loading = false;
            })
            .addCase(fetchCampers.rejected, handleRejected)
            .addCase(fetchCamperById.pending, handlePending)
            .addCase(fetchCamperById.fulfilled, (state, action) => {
                state.item = action.payload;
                state.loading = false;
        })
        .addCase(fetchCamperById.rejected,handleRejected)
    }    
})

export default slice.reducer;