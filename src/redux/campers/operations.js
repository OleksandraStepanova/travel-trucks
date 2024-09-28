import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
    'campers/fetchAll',
    async (_, thunkAPI) => {
        try {
            const respons = await axios.get('/campers');
            return respons.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const fetchCamperById = createAsyncThunk(
    'campers/fetchCamperById',
    async (id, thunkAPI) => {
        try {
            const respons = await axios.get(`/campers/${id}`);
            return respons.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);