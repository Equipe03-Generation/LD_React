import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='bgnav'>
                    <Box className='Cursor' >
                        <Typography variant="h5" color="inherit">
                            Dev Girls
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                                Sobre
                            </Typography>
                        </Box>
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                                Contato
                            </Typography>
                        </Box>
                        <Box mx={1} className='Cursor'>
                            <Typography variant="h6" color="inherit">
                                Equipe
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;