import React, {useState} from 'react';
import styled from '@emotion/styled'
import { getDiferentYear, calculateBrand, getPlan } from '../helper'

const Campo = styled.div`
    display: flex;
    margin-bottom: 3rem;
    align-items: center;
`
const Label = styled.label`
    flex: 0 0 100px;
`
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`
const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        cursor: pointer;
        background-color: #26C6DA;
    }
`

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    text-align: center;
    margin-bottom: 2rem;
`

const Form = ({setResumen}) => {
    const [datos, setDatos] = useState({
        brand: '',
        year: '',
        plan: ''
    })
    const [error, setError] = useState(false)

    // extraer los valores del state
    const {brand, year, plan} = datos
    // leer los datos del formulario y guardarlo en el state
    const obtenerInfor = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    // cuando el usuario presiona submit
    const handleSubmit = e => {
        e.preventDefault()

        if(brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        // iniciamos con una base de 2000
        let result = 2000

        // obtener la difernecia de años
        const diferencia = getDiferentYear(year)
        // por cada año hay que restar el 3%
        result -= ((diferencia * 3) * result)/100;
        
        // incremento Americano 15%
        // Asiatico 5%
        // Europeo 30%
        result = calculateBrand(brand) * result
        // Basico aumenta 20%
        // completo 50%
        const incrementPlan = getPlan(plan)
        result = parseFloat( incrementPlan * result ).toFixed(2)
        console.log(result)
        // total
        setResumen({
            cotizacion: result,
            data: datos
        })

    }


    return (
        <form 
            onSubmit={handleSubmit}
        >
            {error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Campo>
                <Label htmlFor="">Marca</Label>
                <Select 
                    name="brand" 
                    value={brand}
                    onChange={obtenerInfor}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label htmlFor="">Año</Label>
                <Select 
                    name="year" 
                    value={year}
                    onChange={obtenerInfor}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label htmlFor="">Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInfor}
                />Básico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInfor}
                />Completo

            </Campo>

            <Button type="submit">Cotizar</Button>

        </form>
    );
};

export default Form;