import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
    'campers/fetchAll',
    async (_,{ getState, thunkAPI }) => {
       try {const state = getState();        
        const { filters } = state.filters; 
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(filters)) {
            if (value) {
                params.append(key,value)
            }
        }          
        const respons = await axios.get(`/campers?${params.toString()}`)
            return respons.data;
       } catch (error) {
           thunkAPI.rejectWithValue(error.status)
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
