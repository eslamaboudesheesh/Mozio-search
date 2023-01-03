import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps } from '../FormInputProps';
const handelValue = (value: any) => {
    return value || 0;
};
export const FormInputText = ({ name, control, label }: FormInputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: 'required field',
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    type="number"
                    InputProps={{
                        inputProps: {
                            min: 1,
                        },
                    }}
                    onChange={onChange}
                    value={handelValue(value)}
                    helperText={error ? error.message : null}
                    error={!!error}
                    fullWidth
                    label={label}
                    variant="outlined"
                    required
                />
            )}
        />
    );
};
