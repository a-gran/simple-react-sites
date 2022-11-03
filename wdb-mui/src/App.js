import { AppBar, Container, Toolbar, IconButton } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/material/Menu';
import './App.css';

function App() {
    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default App;
