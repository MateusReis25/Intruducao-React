import React from 'react';
import './App.css';
// import Carro from './components/Carro/Carro';
// import Css from './components/Carro/styleCarro.css';
// //import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';
// import Img1 from './components/Carro/img/evoque.png'
// import Img2 from './components/Carro/img/boxster.png'
// import Img3 from './components/Carro/img/urus.png'
// import Img4 from './components/Carro/img/portofino.png'


// import Propriedades from './components/propriedades/Propriedades';
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Component1, Component2} from './components/Multi';
// import Estilo from './components/Estilo/Estilo';
// import MinMax from './components/MinMax';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';

import Familia from './components/children/Familia';
import Membro from './components/children/Membro';
import DigiteNome from './components/controlados/DigiteNome';
import UsuarioLogado from './components/if/UsuarioLogado';
import ListaProdutos from './components/renderizandoLista/ListaProdutos';
import ParImpar from './par ou impar/ParImpar';
import CadastroNome from './components/classe/CadastroNome'

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
      {/* <Primeiro/>
      <Component1/>
      <Component2/>
      <Estilo/>
      <MinMax min="2" max="10"/>
      <Titulo principal="Hello" secundario="Word!"/>
      <Botao/>
      <Contador inicial={0} passo={1} limite={50}/>
      <Propriedades nome="Mateus"/> */}
      
      {/* <ul class="carros" type="none">
        <Carro  img={<img className="img" src={Img1}/>} modelo="Evoque" marca="Range Rover" cor="Branco" ano="2021" portas="4" 
        combustivel="Gasolina" cambio="Automático" aro="18x8" potencia="180 CV" valor="393.950,55" />

        <Carro img={<img className="img" src={Img2}/>} modelo="Boxster" marca="Porsche" cor="Vermelho" ano="2021" portas="2" 
        combustivel="Gasolina e álcool" cambio="Automático" aro="18x8" potencia="300 CV" valor="880.058,98" />

        <Carro img={<img className="img" src={Img4}/>} modelo="Portofino" marca="Ferrari" cor="Prata" ano="2020" portas="2" 
        combustivel="Gasolina" cambio="Automático" aro="20x10" potencia="400 CV" valor="1.250.058,98" />

        <Carro img={<img className="img" src={Img3}/>} modelo="Urus" marca="Lamborghini " cor="Amarelo" ano="2020" portas="4" 
        combustivel="Gasolina" cambio="Automático" aro="20x10" potencia="800 CV" valor="3.100.000,00" />
        
      </ul>
      
      <Pai/> */}
      
      <Familia>
        <Membro nome="Mateus" sobrenome="Reis" />
      </Familia>
      <Familia>
        <Membro nome="Eliana" sobrenome="Reis" />
        <Membro nome="Eduardo" sobrenome="Reis" />
        <Membro nome="Arivaldo" sobrenome="Reis" />
      </Familia>

      <ParImpar num={5}/>
      <ParImpar num={4}/> 

      <UsuarioLogado usuario={{nome:'Mateus', email:'mmreis@rd.com.br'}}/>
      <UsuarioLogado usuario={{nome:'Eduardo'}}/>
      <UsuarioLogado usuario={{email:'eduardo@gmail.com'}}/>
      <UsuarioLogado usuario={null}/>
      <UsuarioLogado usuario={{}}/>

      <ListaProdutos/> 

      <DigiteNome/>

      <CadastroNome/>
     
    </div>
  );
}

export default App;