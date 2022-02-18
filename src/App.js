import React from 'react';
import './App.css';
import Primeiro from './components/Primeiro';
import CompPadrao, {Component1, Component2} from './components/Multi';
import Estilo from './components/Estilo/Estilo';
import MinMax from './components/MinMax';
import Titulo from './components/Titulo';
import Botao from './components/Botao';

// function App() {
//   return (
//     <h1>Hello World!</h1>
//   );
// }

//////////////////////////////////////

// const App = function (){
//   return <h1>Primeiro componente</h1> 
// }

//////////////////////////////////////

// export default () => {
//   return <h1>Primeiro componente</h1>
// }

/////////////////////////////////////

// export default () => <h1>Primeiro componente</h1>


////////////// Ultilizando components //////////////

function App() {
  return (
    <div>
      <Primeiro/>
      <Component1/>
      <Component2/>
      <Estilo/>
      <MinMax min="2" max="10"/>
      <Titulo principal="Hello" secundario="Word!"/>
      <Botao/>
    </div>
  );
}

export default App;