import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";


const notifyError = () => toast.error("Nothing was found for this query");
// const notifyErrorAll = () => toast.error("Something went wrong");

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
    'campers/fetchAll',
    async ({location, form}, rejectWithValue) => {
        
        try {
            if(location&&form){
                const respons = await axios.get(`/campers?location=${location}&form=${form}`);
                return respons.data;
            }
            if (location && !form) {
                const respons = await axios.get(`/campers?location=${location}`);
                return respons.data;
            }
            if (!location && form) {
                const respons = await axios.get(`/campers?form=${form}`);
                return respons.data;
            }
            const respons = await axios.get(`/campers`);
            return respons.data;
        }
        catch (error) {
            notifyError();
            rejectWithValue(error.message)
            // return thunkAPI.rejectWithValue(error.message)
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