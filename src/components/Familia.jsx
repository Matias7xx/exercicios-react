import React from 'react'
import { childrenWithProps } from '../utils/utils' //Importando a forma correta de utils
//Comunicação entre componentes 2
//Utilizando as propriedades de outro componente(Componente filho)
export default props =>
    <div>
        <h1>Família</h1>
        {childrenWithProps(props)}

        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child, { ...props })
        })} Forma Correta*/}

        {/* {React.cloneElement(props.children, { ...props })} !outra possibilidade */}
        {/* {React.cloneElement(props.children,
            { sobrenome: props.sobrenome })}  !outra possibilidade*/}
    </div>