//Componente contador
import React, { Component } from 'react'

export default class Contador extends Component {
    //Inicializar estado do componente
    state = {
        numero: this.props.numeroInicial //Recuperando o valor via props
    }
    
    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
        //this.state.numero++
    }

    menosUm = () => {
        this.setState({ numero: this.state.numero - 1 })
        //this.state.numero--
    }

    //Arrow function com um único parâmetro pode ficar sem parêntese
    alterarNumero = diferenca => { //MaisUm e MenosUm na mesma função
        this.setState({
            numero: this.state.numero + diferenca
        })
        //this.state.numero--
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNumero(10)}>
                    Inc10</button>
                <button onClick={() => this.alterarNumero(-10)}>
                    Dec10</button>
            </div>
        )
    }
}