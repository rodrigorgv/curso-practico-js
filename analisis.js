//HELPERS

const salarios = guatemala.map(
    function(persona){
        return persona.salary
    }
);

const salariosOrdenados = salarios.sort(
    function(a, b){
        return a-b;
    }
);

function espar(numero){
//VERSION CORTA
    return (numero % 2 ===0); 

//VERSION LARGA
//     if (numero % 2 ===0){
//         return true;
//     }
//     else {
//         return false;
//     }
}

function calcularPromedio(lista){

    const sumaLista = lista.reduce((valorAcum =0, nuevoElemento) => valorAcum +nuevoElemento);
    

    const promedioLista = sumaLista / lista.length;
    return promedioLista;


 }

 //MEDIANA GENERAL

 function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  

    if (espar(lista.lenght)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//MEDIANA TOP 10%
const spliceStart = (salariosOrdenados.length *(0.10));
const spliceCount = salariosOrdenados.length - spliceStart;
const salariosTop10 = salariosOrdenados.splice(spliceStart, spliceCount);



const medianaGeneral = medianaSalarios(salariosOrdenados);

const medianaTop10 = medianaSalarios(salariosTop10);

console.log({
    medianaGeneral, medianaTop10

});