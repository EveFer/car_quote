import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding:1rem;
    text-align: center;
`
const ResultCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`

const TextContizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const Result = ({cotizacion}) => {
    
    return(
        (cotizacion === 0) ? <Message>Elige marca, año y tipo de seguro</Message> 
        : (
            <ResultCotizacion>
                <TransitionGroup
                    component="p"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{enter: 500, exit: 500}}
                    >
                        <TextContizacion>El total es: $ {cotizacion}</TextContizacion>
                    </CSSTransition>
                </TransitionGroup> 
            </ResultCotizacion>
          ) 
    )
};

export default Result;