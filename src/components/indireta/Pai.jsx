import React, { useState } from 'react';
import Filho from './Filho';

function Pai(props) {

    const [texto, setTexto] = useState('');
    const [num, setNum] = useState(0);

    function exibirValor(numero, texto){
        setNum(numero);
        setTexto(texto);
    }

    return (
      <>
        <div className="contador">
          <h1>Gerador de números</h1>
          <h3>{texto} {num}</h3>
          <Filho funcao={exibirValor}/>
        </div> 
      </>
    );
}

export default Pai