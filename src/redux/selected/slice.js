import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'selected',
    initialState: {
        items:[],
    },
    reducers: {
        fetchSelected(state, action) {
            state.items.push(action.payload);
        }
    }
});

export const { fetchSelected } = slice.actions;



export default slice.reducer;