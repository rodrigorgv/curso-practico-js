
//convercion a funcion---------------------------------------------------------------
//PASO 1
//primero separamos nuestro input en array con nuestra funcion
function separarValores(cadena, separador) { //cadena son los datos que estamos ingresando en el input, separador es el separador que el usuario esta usando en el input
    let arrayCadena = cadena.split(separador);//split lo divide y lo mete en array
    return arrayCadena;
}

//PASO 2
//funcion para contar los elementos repetidos en nuestro array
function repetidos(lista1){
const arrayCount = {} //creamos un objeto vacio
lista1.map( //generamos la funcion que cuenta cada vez que un valor del array se repite
    function (elemento) {
        if(arrayCount[elemento]){
            arrayCount[elemento]++;
        } else{
            arrayCount[elemento] =1;
        }
         
    }
    
)
return arrayCount;
};



//PASO 3
 //.entries hace que convirtamos un elemento a array, y con sort ordenamos los elementos de menor a mayor

 function convertirArray(lista1Count){
    const listaArray = Object.entries(lista1Count).sort(
       function(a,b){return a[1] - b[1]}
       );
       return listaArray;
    }
   

function calcularModa(){
    const inputValues = document.getElementById("inputValores");
    const valueInput = inputValues.value;
    const inputArray = separarValores(valueInput, ",");
    const sumaElementos = repetidos(inputArray);
    const elementosArray = convertirArray(sumaElementos);
    const moda = elementosArray[elementosArray.length - 1];

    respuesta = document.getElementById("resultadoP");
    

    respuesta.innerText = `la moda es ${moda[0]} ya que se repite ${moda[1]} veces`;
    return elementosArray;
    


}



