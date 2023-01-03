import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from '../features/cities/citiesSlice';
import IntermediateCitiesReducer from '../features/intermediate-cities/IntermediateCitiesSlice';
import CitiesDestinationReducer from '../features/cities-destination/citiesdestinationSlice';
import DataFormSubmirReducer from '../features/form-submit/DataFormSubmitSlice';

const store = configureStore({
    reducer: {
        cities: citiesReducer,
        Intcities: IntermediateCitiesReducer,
        Destcities: CitiesDestinationReducer,
        saveDataForm: DataFormSubmirReducer,
    },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
