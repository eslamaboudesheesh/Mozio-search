import React from 'react';

import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchInterCities } from '../../../features/intermediate-cities/IntermediateCitiesSlice';
import { Controller } from 'react-hook-form';
import { FormInputProps } from '../FormInputProps';

export const IntermediateCities = ({ name, control, label }: FormInputProps) => {
    // const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);

    const city = useAppSelector((state) => state.Intcities);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (options.length == 0) {
            setOptions(city.cities);
        }
    }, [city.cities, options.length]);
    const handelValue = (value: any) => {
        return value || [];
    };
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => {
                    return (
                        <Autocomplete
                            multiple
                            id="asynchronous-multiple"
                            defaultValue={[]}
                            isOptionEqualToValue={(option, value) => option[0] === value[0]}
                            getOptionLabel={(option) => (option[0] ? option[0] : '')}
                            value={handelValue(value)}
                            options={options}
                            loading={city.loading}
                            onInputChange={(event, newValue) => {
                                dispatch(fetchInterCities(newValue.toLowerCase()));
                            }}
                            onChange={(event, item) => {
                                onChange(item);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    label={label}
                                    variant="outlined"
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
                    );
                }}
            />

            {!city.loading && city.error ? <div>Error: {city.error}</div> : null}
        </>
    );
};
