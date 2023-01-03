import React, { useEffect } from 'react';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { Controller } from 'react-hook-form';
import { FormInputProps } from '../FormInputProps';
import { fetchCities } from '../../../features/cities/citiesSlice';

export const Cityoforigin = ({ name, control, label, defualtvalue }: FormInputProps) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [NewDefualtValue, setNewDefualtValue] = useState('');
    const city = useAppSelector((state) => state.cities);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setOptions(city.cities);
    }, [city.cities]);

    useEffect(() => {
        if (defualtvalue != undefined) {
            dispatch(fetchCities(defualtvalue[0].toLowerCase()));
            setNewDefualtValue(defualtvalue);
        }
    }, [defualtvalue, NewDefualtValue, dispatch]);
    const handelValue = (value: any) => {
        return value || '';
    };
    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{
                    required: 'required field',
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => {
                    return (
                        <>
                            <Autocomplete
                                id="asynchronous-demo"
                                open={open}
                                autoComplete
                                clearOnEscape
                                onOpen={() => {
                                    setOpen(true);
                                }}
                                onClose={() => {
                                    setOpen(false);
                                }}
                                isOptionEqualToValue={(option, value) => option[0] === value[0]}
                                getOptionLabel={(option) => (option[0] ? option[0] : '')}
                                value={handelValue(value)}
                                options={options}
                                loading={city.loading}
                                onInputChange={(event, newValue) => {
                                    dispatch(fetchCities(newValue.toLowerCase()));
                                }}
                                onChange={(_, item) => {
                                    onChange(item);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        required
                                        label={label}
                                        variant="outlined"
                                        error={!!error}
                                        helperText={error?.message}
                                        InputProps={{
                                            ...params.InputProps,

                                            endAdornment: (
                                                <React.Fragment>
                                                    {city.loading ? (
                                                        <CircularProgress
                                                            color="inherit"
                                                            size={20}
                                                        />
                                                    ) : null}
                                                    {params.InputProps.endAdornment}
                                                </React.Fragment>
                                            ),
                                        }}
                                    />
                                )}
                            />
                        </>
                    );
                }}
            />

            {!city.loading && city.error ? <div>Error: {city.error}</div> : null}
        </>
    );
};
