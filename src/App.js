import logo from './logo.svg';
import './App.css';
import Contenido from './components/Contenido';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {

const [numero, setNumero] = useState('');
const [multiplica, setMultiplica] = useState('');
const addnumero = (numeroinput)=> {
  setNumero(numeroinput);
  setMultiplica('');
};
const addmultiplica = (numeromultiplica) =>{
  setMultiplica(numeromultiplica);
}


if (multiplica!="" && numero==""){
  alert("introduzca un numero valido");
  setMultiplica('');
  
};
  //console.log(numero)


;


  return (
    <div>
      
      <Componente1 addnumero={addnumero}/>
      <Contenido addmultiplica={addmultiplica}/>
      <Componente2 
        num={numero}
        mult={multiplica}
      />
    </div>
  );
}

export default App;
