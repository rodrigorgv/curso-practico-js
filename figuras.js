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
    const lblResultadoCuadrado = document.getElementById("resultadoCuadrado");
    lblResultadoCuadrado.innerText = `el perimetro del cuadrado es de ${perimetro}`;
}


function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    const lblResultadoCuadrado = document.getElementById("resultadoCuadrado");
    lblResultadoCuadrado.innerText = `el area del cuadrado es de ${area}`;
}

////CIRCULO

function calcularCircunferencia(){
    const input= document.getElementById("inputCirculo");
    const value = input.value;

    const circunferencia = perimetroCirculo(value);
    const circunfe = circunferencia.toFixed(3);
    const lblResultadoCirculo = document.getElementById("resultadoCirculo");
    lblResultadoCirculo.innerText = `la circunferencia del circulo es de ${circunfe}`;

    
    
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const areaCirculoresultado = areaCirculo(value);
    const area = areaCirculoresultado.toFixed(3); //reduccion de decimales a 3 decimales
    const lblResultadoCirculo = document.getElementById("resultadoCirculo");
    lblResultadoCirculo.innerText = `el area del circulo es de ${area}`;
    

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
    const resultTriangulo = document.getElementById("resultadoTriangulo");
    resultTriangulo.innerText = `el perimetro de su triangulo es de ${ptriangulo}`
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
    const resultTriangulo = document.getElementById("resultadoTriangulo")
    resultTriangulo.innerText = `el area de su triangulo es de ${aTriangulo}`
    

}


//funcion para limpiar campos
function limpiarCamposCuadrado(){
    document.getElementById('inputCuadrado').value="";
    const inputp = document.getElementById("resultadoCuadrado");

    inputp.innerText="";
    
}

function limpiarCamposCirculo(){
    document.getElementById('inputCirculo').value="";
    const inputp = document.getElementById("resultadoCirculo");

    inputp.innerText="";
    
}

function limpiarCamposTriangulo(){
    document.getElementById('inputLado1').value="";
    document.getElementById('inputLado2').value="";
    document.getElementById('inputBase').value="";
    document.getElementById('inputAltura').value="";
    const inputp = document.getElementById("resultadoTriangulo");

    inputp.innerText="";
    
}





/*-------------------------------------------------------------------

function trianguloIsosceles(ladoa, ladob, base){
    if(ladoa == ladob && ladoa != base){
        console.log("los lados ingresados indica que es un triangulo isosceles")

        const altura = Math.sqrt( Math.pow(ladoa, 2)- (Math.pow(base, 2)/4));
        console.log(`la altura del triangulo isosceles es de ${altura}`);
    }
    else{
        console.log("el triangulo no es isosceles vuelva a intentar con nuevos valores")
    }

}

triangulIsosceles();*/