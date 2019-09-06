import React from 'react'
import Filho from './Filho'
//Comunicação indireta entre componentes(do filho para o pai)

export default props => {
    const notificarSaida = 
        lugar => alert(`Liberado para ${lugar}`)
    return (
        <div>
            <Filho notificarSaida={notificarSaida} />
        </div>
    )
}