import React from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps } from '../FormInputProps';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';

export const FormInputDate = ({ name, control, label }: FormInputProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
                name={name}
                control={control}
                rules={{
                    required: 'required field',
                }}
                render={({ field: { onChange, value, ...rest }, fieldState: { error } }) => (
                    <DesktopDatePicker
                        label={label}
                        disablePast
                        inputFormat="DD/MM/YYYY"
                        value={value ? value : value || new Date()}
                        onChange={(event) => {
                            onChange(event?.toISOString());
                        }}
                        {...rest}
                        renderInput={(params) => (
                            <TextField
                                required
                                {...params}
                                sx={{ width: '100%' }}
                                error={!!error}
                                helperText={error?.message}
                            />
                        )}
                    />
                )}
            />
        </LocalizationProvider>
    );
};
