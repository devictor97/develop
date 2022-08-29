import { useState } from 'react';
import './App.scss';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Design',
      corPrimaria: '#d86ebf',
      corSecundaria: '#e06b69'
    },    
    {
      nome: 'Gestão de projetos',
      corPrimaria: '#ffeedf',
      corSecundaria: '#ff8a29'
    },
    {
      nome: 'Gestão de projetos 2',
      corPrimaria: '#ffeedf',
      corSecundaria: '#ff8a29'
    }
  ]
  // uma constante com os times

  const [colaboradores, setColaboradores] = useState([]);
  //criando um array com state 
  // pois vai ser modificado. vai armazenar os colaboradores cadastrados



  const NovoColaborador = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }
  // console.log(colaboradores);
  // criando a função 'NovoColaborador' que recebe um parametro 'colaborador', e quando executada ela chama o 'setColaboradores' 
  // e add 'colaborador' no array 'colaboradores'


  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => NovoColaborador(colaborador)} />
      {/* // alimentando essa props 'aoColaboradorCadastrado' dentro do componente formulario, e falando que esse valor se chama 
      colaborador, ativa a funcao 'NovoColaborador' e passando ela mesma (colaborador) como parametro 
      // passando tambem os times pro formulario, mas como não preciso das cores lá, faço um map no times, falando que cada item(time) vai ter o valor time.nome  */}
      

     { 
     times.map(time => 
     <Time key={time.nome} 
     colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
     nome={time.nome} 
     corFundo={time.corPrimaria} 
     corSecundaria={time.corSecundaria} />)
     }
    </div>
  );
}

export default App;
