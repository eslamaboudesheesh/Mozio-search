import React, { useEffect, useState } from 'react';

import { Button, Container, Grid } from '@mui/material';

import { useForm } from 'react-hook-form';
import { Cityoforigin } from '../FormsUI/Autocomplete-Cityoforigin/Cityoforigin';
import { IntermediateCities } from '../FormsUI/Autocomplete-Intermediatecities/IntermediateCities';
import { Cityofdestination } from '../FormsUI/Autocomplete-Cityofdestination/Cityofdestination';
import { FormInputDate } from '../FormsUI/DateTimePicker/FormInputDate';
import { FormInputText } from '../FormsUI/TextFieldNumber/TextFieldNumber';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
    IntermediateCities: any;
    Cityoforigin: any[];
    Cityofdestination: any[];
    TripDate: Date;
    NumberOfPassengers: number;
}

function SearchForm({ formDataParams }: any = false) {
    const [defualtValue, setdefualtValue] = useState<IFormInput>();
    const navigate = useNavigate();

    const methods = useForm<IFormInput>({
        defaultValues: formDataParams ? formDataParams : defualtValue,
    });

    const { handleSubmit, control, setValue } = methods;
    const onSubmit = (data: any) => {
        sessionStorage.setItem('defualtValue', JSON.stringify(data));
        navigate(`/SearchResult/search/${encodeURI(JSON.stringify(data))}`);
    };
    useEffect(() => {
        if (formDataParams) {
            console.log(formDataParams);
            setdefualtValue(formDataParams);
            handelValidation(formDataParams);
        }
    }, [formDataParams, handelValidation]);

    useEffect(() => {
        if (defualtValue == undefined) {
            const element: IFormInput = JSON.parse(
                sessionStorage.getItem(sessionStorage.key(0) || '[]') || '[]',
            );
            setdefualtValue(element);
            handelValidation(element);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defualtValue]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function handelValidation(element: IFormInput) {
        if (element !== undefined) {
            setValue('Cityoforigin', element.Cityoforigin, {
                shouldDirty: false,
                shouldTouch: false,
            });
            setValue('IntermediateCities', element.IntermediateCities, {
                shouldDirty: false,
                shouldTouch: false,
            });
            setValue('Cityofdestination', element.Cityofdestination, {
                shouldDirty: false,
                shouldTouch: false,
            });
            setValue('NumberOfPassengers', element.NumberOfPassengers, {
                shouldDirty: false,
                shouldTouch: false,
            });
            setValue('TripDate', element.TripDate, {
                shouldDirty: false,
                shouldTouch: false,
            });
        }
    }
    return (
        <Grid container data-cy="form-container">
            <Grid item xs={12}>
                <Container maxWidth="md">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} my={4}></Grid>

                            <Grid item xs={6}>
                                <Cityoforigin
                                    name={'Cityoforigin'}
                                    control={control}
                                    label={'City of origin'}
                                    defualtvalue={defualtValue?.Cityoforigin}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <IntermediateCities
                                    name={'IntermediateCities'}
                                    control={control}
                                    label={'Intermediate Cities'}
                                    defualtvalue={defualtValue?.IntermediateCities}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Cityofdestination
                                    name={'Cityofdestination'}
                                    control={control}
                                    label={'City of destination'}
                                    defualtvalue={defualtValue?.Cityofdestination}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormInputDate
                                    name={'TripDate'}
                                    control={control}
                                    label={'Date of the trip'}
                                    defualtvalue={defualtValue?.TripDate}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormInputText
                                    name={'NumberOfPassengers'}
                                    control={control}
                                    label={'Number Of Passengers'}
                                    defualtvalue={defualtValue?.NumberOfPassengers}
                                />
                            </Grid>

                            <Grid item xs={12} textAlign={'right'}>
                                <Button
                                    sx={{ width: '20%' }}
                                    onClick={handleSubmit(onSubmit)}
                                    variant={'contained'}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Grid>
        </Grid>
    );
}

export default SearchForm;
