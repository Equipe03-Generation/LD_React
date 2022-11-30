import { Grid } from '@material-ui/core';
import React from 'react';
import './Sobre.css';
import { Box } from '@mui/material';

function Sobre() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <h1>Sobre o projeto Dev Girls</h1>
            <p>Fórum de interações que abrange a conversação entre mulheres que são da área e mulheres interessadas a ingressar, com foco em perguntas e respostas sobre inovações e conceitos de programação. Visto que há uma desigualdade, esse fórum tem um público alvo pois trata-se de uma ação afirmativa com o intuito de colocar mais mulheres no ramo da tecnologia.</p>
        </Grid>
    )
}


export default Sobre;