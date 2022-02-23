import React, {useState} from 'react';
import Estilo from './Estilo/Estilo';

function Contador (props) {
    
    const [numero, setNumero] = useState(props.inicial);

    const incremento = () => {
        if (numero == props.limite){
            return alert ('Limite atingido');
        }
        setNumero(numero + props.passo);
    } 
    
    const decremento = () => {
        if (numero <= 0){
           return alert ('Não é possivel decrementar');
        }
        setNumero(numero - props.passo);    
    }
    

    return (
        <>
            <button className="botao" onClick={incremento}>+</button>
            <h2 className="num">{numero}</h2>
            <button className="botao" onClick={decremento}>-</button>
        </>
    )
}

export default Contador;