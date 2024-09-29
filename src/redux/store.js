import { configureStore } from "@reduxjs/toolkit";
import campersReduser from "./campers/slice";
import filtersReducer from "./filters/slice";

export const store = configureStore({
    reducer: {
        campers: campersReduser,
        filters: filtersReducer,
    }
})