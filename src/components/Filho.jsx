import React from 'react'
//Comunicação indireta entre componentes(do filho para o pai)
export default props => 
    <div>
        <button onClick={() => props.notificarSaida('Shopping')}>
            Vou Sair
        </button>
    </div>