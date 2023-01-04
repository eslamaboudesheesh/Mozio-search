/* eslint-disable react-hooks/exhaustive-deps */
import { CircularProgress, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardData from '../../components/CardUI/CardData';
import SearchForm from '../../components/SearchForm/SearchForm';
interface IFormInput {
    IntermediateCities: any;
    Cityoforigin: any[];
    Cityofdestination: any[];
    TripDate: Date;
    NumberOfPassengers: number;
}
export const SearchResult = () => {
    const params = useParams();
    const [Dest, setDest] = useState<number | any>();
    const [cityOrigin, setcityOrigin] = useState<String | any>();
    const [cityDest, setcityDest] = useState<String | any>();
    const [isLoading, setisLoading] = useState(false);
    const [FormDataParams, setFormDataParams]: any = useState();

    useEffect(() => {
        const FormData: IFormInput = JSON.parse(params['query'] || '');
        setFormDataParams(FormData);
        getTheDestination(FormData?.Cityoforigin, FormData?.Cityofdestination);
        setTimeout(() => {
            setisLoading(true);
        }, 2000);
        console.log(FormData);
    }, [params]);

    const getTheDestination = (origin: any[], dest: any[]) => {
        if (origin.length > 0 && dest.length > 0) {
            setcityDest(dest[0]);
            setcityOrigin(origin[0]);
            const cityTotoal: any = haversine(origin[1], origin[2], dest[1], dest[2]);
            setDest(cityTotoal.toFixed(1));
        }
    };
    function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
        // distance between latitudes
        // and longitudes
        let dLat = ((lat2 - lat1) * Math.PI) / 180.0;
        let dLon = ((lon2 - lon1) * Math.PI) / 180.0;

        // convert to radiansa
        lat1 = (lat1 * Math.PI) / 180.0;
        lat2 = (lat2 * Math.PI) / 180.0;

        // apply formulae
        let a =
            Math.pow(Math.sin(dLat / 2), 2) +
            Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
        let rad = 6371;
        let c = 2 * Math.asin(Math.sqrt(a));
        return rad * c;
    }
    return (
        <Grid container>
            <Grid item xs={12} mb={5}>
                {FormDataParams ? (
                    <SearchForm formDataParams={FormDataParams} />
                ) : (
                    <Grid item xs={12} textAlign={'center'} px={2} my={3}>
                        <CircularProgress />
                    </Grid>
                )}
            </Grid>
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 800,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#9895951f',
                }}
            >
                {isLoading ? (
                    <CardData dest={Dest} cityOrigin={cityOrigin} cityDest={cityDest} />
                ) : (
                    <Grid item xs={12} textAlign={'center'} px={2} my={3}>
                        <CircularProgress />
                    </Grid>
                )}
            </Paper>
        </Grid>
    );
};
