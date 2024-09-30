import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'filters',
    initialState: {
        location: '',
        form: '',
        AC: false,
        bathroom: false,
        kitchen: false,
        radio: false,
        transmission: false,
    },
    reducers: {
        changeFilter(state, action) {
            state.form = action.payload.form;
            state.location = action.payload.location;
            state.AC = action.payload.AC;
            state.bathroom = action.payload.bathroom;
            state.kitchen = action.payload.kitchen;
            state.radio = action.payload.radio;
            if (action.payload.transmission) {
                state.transmission = 'automatic'
            }
        }
    }
});

export const { changeFilter } = slice.actions;



export default slice.reducer;