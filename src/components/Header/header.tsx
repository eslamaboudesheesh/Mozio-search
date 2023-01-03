import { Toolbar, AppBar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Mozio Demo</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
