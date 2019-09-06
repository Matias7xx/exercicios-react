import React, { useState, useEffect } from 'react'
//Utilizando React Hooks para usar ESTADO em componentes funcionais
//Criando um CONTADOR em componente funcional

export default props => {
    const [contador, setContador] = useState(100) //variável, função que vai alterar a variável
    const [status, setParOuImpar] = useState('Par') //variável, função que vai alterar a variável

    useEffect(() => {//Função do ciclo de vida que será chamada sempre que o componente for montado e atualizado
        contador % 2 === 0 ? setParOuImpar('Par') :
            setParOuImpar('Impar')
    }, [contador])

    return (
        <div>
            <h1>{contador}</h1>
            <h3>{status}</h3>
            <button onClick={() => setContador(contador + 1)}>
                Inc</button>
        </div>
    )
}