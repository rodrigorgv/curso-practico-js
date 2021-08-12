//---------------este es el codigo del cuadrado---------------
console.group("Cuadrados");//para agurpar mensajes en la consola

const perimetroCuadrado= (lado) => 4 * lado; //arrow function

function areaCuadrado(lado){//function normal

    return Math.pow(lado, 2);
} 
areaCuadrado();

console.groupEnd();


//---------------este es el codigo del triangulo---------------
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return (lado1+lado2+base);
} 


function areaTriangulo(base, altura){

    return (base*altura)/2;
}

console.groupEnd();



//---------------este es el codigo del circulo---------------
console.group("Circulo");

//diametro
function diametroCirculo(radio){
    return radio*2;
}

//PI
const piCirculo=Math.PI;
console.log(`PI es ${piCirculo}`)

//circunferencia
function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro*piCirculo;
} 


//area
function areaCirculo(radio){

    return (Math.pow(radio, 2)*piCirculo);
} 



console.groupEnd();

//-------------------------------------------------------------------
//INTERACTUAR CON HTML

//CUADRADO

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(`el perimetro del cuadrado es: ${perimetro}`);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(`el area del cuadrado es: ${area}`);
}

////CIRCULO

function calcularCircunferencia(){
    const input= document.getElementById("inputCirculo");
    const value = input.value;

    const circunferencia = perimetroCirculo(value);

    alert(`la circunferencia del circulo es: ${circunferencia}`);
    
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const areaCirculoresultado = areaCirculo(value);
    alert(`el area del circulo es: ${areaCirculoresultado}`);

}

////TRIANGULO

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputLado1");
    const lado1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("inputLado2");
    const lado2 = Number(inputLado2.value);
    const inputBase = document.getElementById("inputBase");
    const base = Number(inputBase.value);
    const inputAltura = document.getElementById("inputAltura");
    const altura = Number(inputAltura.value);

    const ptriangulo = perimetroTriangulo(lado1, lado2, base);
    alert(`el perimetro de su triangulo es de ${ptriangulo}`)
}

function calcularAreaTriangulo(){
    const inputLado1 = document.getElementById("inputLado1");
    const lado1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("inputLado2");
    const lado2 = Number(inputLado2.value);
    const inputBase = document.getElementById("inputBase");
    const base = Number(inputBase.value);
    const inputAltura = document.getElementById("inputAltura");
    const altura = Number(inputAltura.value);

    const aTriangulo= areaTriangulo(base, altura);
    alert(`el area de su triangulo es de ${aTriangulo}`)

}