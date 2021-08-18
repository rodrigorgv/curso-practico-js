
//-------------------------funcion para separar los valores ingresados del input-----------------------------
//--------------------a la vez estamos ordenandolos de manera ascendente con el metodo sort----------------

function separarValores(cadena, separador) { //cadena son los datos que estamos ingresando en el input, separador es el separador que el usuario esta usando en el input
    let arrayCadena = cadena.split(separador);//split lo divide y lo mete en array

    //el sort nos sirve para ordenar elementos de manera ascendente (.reverse nos ayudaria para manera descendente)
    //sort tiene el fallo de que solo toma en cuenta el primer digito
    //utilizaremos una funcion de comparacion para poder ordernarlo de manera ascendente tomando en cuenta todos los digitos, no solo el primero
    arrayCadena.sort(function (a, b) { return a - b });
    return arrayCadena;


}





//------------------------funcion para calcular el promedio de nuestros valores--------
function calcularPromedio(lista){

    const sumaLista = lista.reduce((valorAcum =0, nuevoElemento) => valorAcum +nuevoElemento);
    

    const promedioLista = sumaLista / lista.length;
    return promedioLista;


 }

//----------------------funcion para calcular la mediana-----------------------


function calcularMediana() {
    const inputV = document.getElementById("inputValores");
    const valueV = inputV.value;
    
    let mediana=0;
    const resultado = separarValores(valueV, ","); //igualo resultado al arrayCadena de la funcion separadora
    const mitadLista = parseInt(resultado.length/2);
    
    const inputP = document.getElementById("resultadoP");

    if (resultado.length % 2 == 0) { 
        const elemento1 = Number (resultado[mitadLista]);
        const elemento2 = Number (resultado[mitadLista - 1]);

        
        const promedio = calcularPromedio([elemento1, elemento2]);
    
        
        inputP.innerText = `los valores ordenados son ${resultado} 
        la mediana es: ${promedio}`;




    } else {

        mediana = resultado[mitadLista];
        inputP.innerText = `los valores ordenados son ${resultado} 
        la mediana es: ${mediana}`;

    }



}






