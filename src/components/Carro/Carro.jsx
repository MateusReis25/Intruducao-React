import React, { useState } from 'react';
import CSS from './styleCarro.css';

function Carro(props) {


    
    return (
        <li className="list">
            
            <div>{props.img}</div><hr/>
            <div><strong>Modelo: </strong>{props.modelo}</div>
            <div><strong>Marca: </strong>{props.marca}</div>
            <div><strong>Cor: </strong>{props.cor}</div>
            <div><strong>Ano: </strong>{props.ano}</div>
            <div><strong>Quantidade de portas: </strong>{props.portas}</div>
            <div><strong>Combustível: </strong>{props.combustivel}</div>
            <div><strong>Câmbio: </strong>{props.cambio}</div>
            <div><strong>Aro: </strong>{props.aro}</div>
            <div><strong>Potência: </strong>{props.potencia}</div>
            <div><strong>Valor: R$ </strong>{props.valor}</div>
            <button className="btn">Comprar</button>
        </li>  
    );
}

export default Carro