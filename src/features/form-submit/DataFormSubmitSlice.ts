import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    formData: any;
};
const initialState: InitialState = {
    formData: {},
};

const DataFormSubmitSlice = createSlice({
    name: 'DataForm',
    initialState,
    reducers: {
        addDataFormSubmit(state, action: PayloadAction) {
            state.formData = action.payload;
        },
    },
});
export const { addDataFormSubmit } = DataFormSubmitSlice.actions;

export default DataFormSubmitSlice.reducer;
