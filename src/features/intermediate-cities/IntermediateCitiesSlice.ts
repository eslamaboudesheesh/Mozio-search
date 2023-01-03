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
export const fetchInterCities = createAsyncThunk('cities/fetchInterCities', (data: string) => {
    return axios
        .get('./cities.json')
        .then((response: any) =>
            data ? response.data.filter((e: any) => e[0]?.toLowerCase().includes(data)) : [],
        );
});

const IntermediateCitiesSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchInterCities.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchInterCities.fulfilled, (state, action: PayloadAction<[]>) => {
            state.loading = false;
            state.cities = action.payload;
            state.error = '';
        });
        builder.addCase(fetchInterCities.rejected, (state, action) => {
            state.loading = false;
            state.cities = [];
            state.error = action.error.message || 'Something went wrong';
        });
    },
});

export default IntermediateCitiesSlice.reducer;
