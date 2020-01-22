import React from 'react';
import styled from '@emotion/styled'
import Header from './components/Header'
import Form from './components/Form'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`

function App() {
  return (
    <Contenedor>
      <Header 
        title='Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Form/>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
