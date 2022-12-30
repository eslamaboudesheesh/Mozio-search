import React from 'react';

import { useState } from 'react';
import { fetchCities } from '../../features/cities/citiesSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

export const AutoCompleteView = () => {
    const [open, setOpen] = useState(false);

    const city = useAppSelector((state) => state.cities);
    const dispatch = useAppDispatch();

    const onSearch = (value: any) => {
        dispatch(fetchCities(value));
    };
    return (
        <>
            <h2>List of cities</h2>
            <Autocomplete
                id="asynchronous-demo"
                sx={{ width: 300 }}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                isOptionEqualToValue={(option, value) => option === value}
                getOptionLabel={(option) => option[0]}
                options={city.cities}
                loading={city.loading}
                onInputChange={(event, newValue) => {
                    onSearch(newValue.toLowerCase());
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="City"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {city.loading ? (
                                        <CircularProgress color="inherit" size={20} />
                                    ) : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}
            />
            {!city.loading && city.error ? <div>Error: {city.error}</div> : null}
        </>
    );
};
