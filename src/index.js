import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './components/PrimeiroComponente'
//import { CompA, CompB } from './components/DoisComponentes.jsx'
//import MultiElementos from './components/MultiElementos'
// import FamiliaSilva from './components/FamiliaSilva'
// import Familia from './components/Familia'
// import Membro from './components/Membro
// import ComponenteComFuncao from './components/ComponenteComFuncao'
// import Pai from './components/Pai'
// import ComponenteClasse from './components/ComponenteClasse'
// import Contador from './components/Contador'
import Hook from './components/Hook'

//ctrl + k + ctrl + c para comentar
const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook />

        {/* <Contador numeroInicial={100} /> */}

        {/* <ComponenteClasse valor="Sou um componente de classe!" /> */}

        {/* <Pai /> */}

        {/* <ComponenteComFuncao /> */}

        {/* <Familia sobrenome="Pereira">
            <Membro nome="André" />
            <Membro nome="Mariana" />
        </Familia> */}

        {/* <FamiliaSilva /> */}

        {/* <MultiElementos /> */}

        {/*<CompA valor="Olá eu sou o Componente A!" />
        <CompB valor="Olá eu sou o Combonente B!" />*/}

        {/* <PrimeiroComponente valor="Bom dia!" aBcD={2**8} /> */}
    </div>
, element)

//const helloWorld = <h1>Olá React!</h1>
//ReactDOM.render(helloWorld, element)