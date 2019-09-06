import React from 'react'
//Comunicação entre componentes

export default props => 
    <div>
        {props.nome}
        <strong> {props.sobrenome}</strong>
    </div>