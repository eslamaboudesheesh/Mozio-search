import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    loading: boolean;
    cities: [];
    error: string;
};
const initialState: InitialState = {
    loading: false,
    cities: [],
    error: '',
};

// Generates pending, fulfilled and rejected action types
export const fetchDestCities = createAsyncThunk('cities/fetchDestCities', (data: string) => {
    return axios
        .get('https://mozio-search-fake-api.vercel.app/data')
        .then((response: any) =>
            data ? response.data.filter((e: any) => e[0]?.toLowerCase().includes(data)) : [],
        );
});

const citiesdestinationSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDestCities.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchDestCities.fulfilled, (state, action: PayloadAction<[]>) => {
            state.loading = false;
            state.cities = action.payload;
            state.error = '';
        });
        builder.addCase(fetchDestCities.rejected, (state, action) => {
            state.loading = false;
            state.cities = [];
            state.error = action.error.message || 'Something went wrong';
        });
    },
});

export default citiesdestinationSlice.reducer;
