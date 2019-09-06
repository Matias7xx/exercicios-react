import React from 'react'
//Utilizando dois componentes
const CompA = props => 
    <h1>Primeiro componente diz: {props.valor}</h1>

const CompB = props =>
    <h1>Segundo componente diz: {props.valor}</h1>

export { CompA, CompB }