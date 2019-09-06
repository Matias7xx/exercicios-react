import React from 'react'

const Botafogo = true

export default (props) =>  //Utilizando props
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.aBcD}</h2>
        <p>{Botafogo ? 'Glorioso' : 'Não'}</p>
    </div>

//export default () => //Arrow sem chaves e return
//    <h1>Primeiro Componente!</h1>


/*---export default function () {
    return <h1>Primeiro Componente!</h1>
} ---*/

/*---function primeiro() {
    return <h1>Primeiro Componente!</h1>
} ---

export default primeiro*/