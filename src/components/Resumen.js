import React, {Fragment} from 'react';
import styled from '@emotion/styled'
import { firstUpperCase } from '../helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #ffffff;
    margin-top: 1rem;
`

const Resumen = ({data}) => {
    const {brand, year, plan} = data

    if (brand === '' || year === '' || plan === '' ) return null
    
    return (
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {firstUpperCase(brand)} </li>
                <li>Plan: {firstUpperCase(plan)}</li>
                <li>Año: {year}</li>
                
            </ul>
        </ContenedorResumen>
    );
};

export default Resumen;