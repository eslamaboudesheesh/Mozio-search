import React from 'react';

import { useEffect } from 'react';
import { fetchCities } from '../../features/cities/citiesSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const AutoCompleteView = () => {
    const city = useAppSelector((state) => state.cities);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCities());
    }, [dispatch]);
    return (
        <div>
            <h2>List of cities</h2>
            {city.loading && <div>Loading...</div>}
            {!city.loading && city.error ? <div>Error: {city.error}</div> : null}
            {!city.loading && city.cities.length ? (
                <ul>
                    {city.cities.map((city, index) => (
                        <li key={index}>{city}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};
