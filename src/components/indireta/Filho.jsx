import React, { useState } from 'react';
import Css from './styleInd.css';


function Filho(props) {

    function gerarNumero()  {
        return Math.random();
    }

    return (
      <>
        <div className="btnFilho">
          <button onClick={function (){
              const n = gerarNumero();
              props.funcao(n, 'O número é: ');
              }}>
                  Executar
          </button>
        </div>

      </>
    );
}

export default Filho