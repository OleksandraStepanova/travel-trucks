import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'filters',
    initialState: {
        filters: {},
    },
    reducers: {
        changeFilter(state, action){            
            if (action.payload.location.trim() !== '') state.filters.location = action.payload.location;
            if (action.payload.form !== '') state.filters.form = action.payload.form;
            if (action.payload.AC) state.filters.AC = action.payload.AC;
            if (action.payload.bathroom) state.filters.bathroom = action.payload.bathroom;
            if (action.payload.kitchen) state.filters.kitchen = action.payload.kitchen;
            if (action.payload.radio) state.filters.radio = action.payload.radio;
            if (action.payload.transmission) state.filters.transmission = 'automatic';
            
        },
        clearFilter(state) {
            state.filters = {}
        }
    }
});

export const { changeFilter } = slice.actions;
export const { clearFilter } = slice.actions;



export default slice.reducer;