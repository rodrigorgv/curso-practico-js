
//NECECITAMOS UNA FUNCION PARA CONVERTIR EL INPUT EN UN ARRAY
function separarValores(cadena, separador) { //cadena son los datos que estamos ingresando en el input, separador es el separador que el usuario esta usando en el input
   let arrayCadena = cadena.split(separador);//split lo divide y lo mete en array
   
   return arrayCadena;
}

//CONVERTIMOS EL ARRAY DE STRING EN ARRAY NUMERICO
function convertirNumeros(datos){
   const arrayNumber = datos.map((i) => Number(i));///para convertir el array de strings a array de number
   return arrayNumber;
}

//GENERAMOS LA FUNCION PARA OBTENER EL PROMEDIO

 function calcularPromedio(lista){

     let sumarLista=0;

    for(let i=0; i<lista.length; i++){ 
       sumarLista = (sumarLista + lista[i]);
    }

    const total = sumarLista/lista.length;
    return total;

 }



 //CONECTAMOS CON NUESTRO HTML
 function media(){
    const input = document.getElementById("inputValores")
    const valores = input.value;

    arrayValores = separarValores(valores, ",");
    arrayNumeros = convertirNumeros(arrayValores);
    promedio = calcularPromedio(arrayNumeros);


   resultP = document.getElementById("resultadoP");
   resultP.innerText = `la media aritmetica es de ${promedio}`;
 }

//  const sumaLista = lista.reduce((valorAcum =0, nuevoElemento) => valorAcum +nuevoElemento);
//  const promedioLista = sumaLista / lista.length;
//  return promedioLista;


    //---------------------------------- opcion1: usando For
    // let sumarLista=0;

    // for(let i=0; i<lista.length; i++){ //.length es parecido a .size
    //    sumarLista = sumarLista + lista[i]
    // }


   //----------------------------------- opcion2: usando.reduce
     //reduce hace que unamos el elemento 1 con el dos, luego ese resultado lo unamos al elemento tres y asi sucesivamente
    // const sumaLista = lista.reduce(
    //     function(valorAcum =0, nuevoElemento){
    //         return valorAcum + nuevoElemento;
    //     }
    // );


