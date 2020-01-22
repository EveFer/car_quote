import React, {useState} from 'react';
import styled from '@emotion/styled'
import Header from './components/Header'
import Form from './components/Form'
import Resumen from './components/Resumen'
import Result from './components/Result'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  })
  const {data, cotizacion} = resumen
  return (
    <Contenedor>
      <Header 
        title='Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Form
          setResumen={setResumen}
        />
        <Resumen 
          data={data}
        />
        <Result 
          cotizacion={cotizacion}
        />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
