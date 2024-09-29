import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'filters',
    initialState: {
        location: '',
        form: '',
    },
    reducers: {
        changeFilter(state, action) {
            state.form = action.payload.form;
            state.location = action.payload.location;
        }
    }
});

export const { changeFilter } = slice.actions;



export default slice.reducer;