function Contenido(props) {

const submit37 = ()=>{
    
    console.log("37");
    props.addmultiplica("37");
};
const submit43 = ()=>{
    
    props.addmultiplica("43");

};
    return (
       <div>
            <button onClick={submit37}>x 37</button>

            <button onClick={submit43}>x 43</button>
        </div>
    )

}
export default Contenido;