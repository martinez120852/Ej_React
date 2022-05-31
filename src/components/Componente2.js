function Componente2(props) {
    const numero = props.num;
    const multiplica = props.mult;
    let resultado="";
    if (numero!="" && multiplica!=""){
         resultado = numero*multiplica;
    }

   

    
    return (
        <div>
            <div>
                Ha seleccionado multiplicar por: {multiplica}
            </div>
            <div>
                RESULTADO= { resultado }
            </div>
        </div>

    )

}
export default Componente2;