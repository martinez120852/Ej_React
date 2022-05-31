import { useState } from 'react';

    

function Componente1(props) {


    const numeroHandler =(event) =>{

        const numero =(event.target.value);
        console.log(numero);
        //ESTO VA AL PULSAR EL BOTON SIN NUMERO CORRECTO
        if (numero!="") {
            console.log("OK");
            props.addnumero(numero);
        } 
       
        /*else {
            console.log("Introduzca numero");
        }*/
    };


    return (
      
            <div>
                <label>Introduzca numero</label>
                <input type='number' onChange={numeroHandler}></input>
            </div>
     
    )

}
export default Componente1;