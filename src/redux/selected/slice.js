import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'selected',
    initialState: {
        items:[],
    },
    reducers: {
        fetchSelected(state, action) {
            const index = state.items.indexOf(action.payload);
            if (index === -1) {
                state.items.push(action.payload);
            } else {
                state.items.splice(index,1)
            }            
        }
    }
});

export const { fetchSelected } = slice.actions;



export default slice.reducer;