import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
// import SearchForm from './components/SearchForm/SearchForm';

function App() {
    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Outlet />
            </Grid>
        </div>
    );
}

export default App;
