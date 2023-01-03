import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import Header from './components/Header/header';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12}>
                    <Header />
                </Grid>
            </Grid>
            <SearchForm />
        </div>
    );
}

export default App;
