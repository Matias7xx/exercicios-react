import React from 'react'
//Função em um componente funcional
const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )

}