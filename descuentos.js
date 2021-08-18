
var calcularDescuento = (precio, descuento) => precio - (precio * ((descuento) / 100));




// function onCickPriceD(){
//     const inputPrecio = document.getElementById("inputPrice");
//     const valuePrecio= inputPrecio.value;

//     const inputDiscount = document.getElementById("inputDiscount");
//     const valueDiscount= inputDiscount.value;

//     const precioConDescuento = calcularDescuento(valuePrecio, valueDiscount);
//     const inputP = document.getElementById("ResultP");
//     inputP.innerText = `el precio con descuento es de ${precioConDescuento}`;

// }


//----------------SOLUCION #1 DE FUNCION CON CUPONES----------------

// const cupones = ["abc123", "cuponMedio", "cuponMayor"];

// function precioTotalCupon() {
//     const inputPrecio = document.getElementById("inputPrice");
//     const valuePrecio = inputPrecio.value;

//     const inputCuponr = document.getElementById("inputCupon");
//     const valueCupon = inputCuponr.value;

//     let descuento=0;

//     switch (valueCupon) {
//         case ("abc123"): descuento = 15; break;
//         case ("cuponMedio"): descuento = 25; break;
//         case ("cuponMayor"): descuento = 35; break;
//     }
    

//     const precioConDescuento = calcularDescuento(valuePrecio, descuento);
    
//     const inputP = document.getElementById("ResultP");
//     inputP.innerText = `el precio con descuento es de ${precioConDescuento}`;

// }

//----------------SOLUCION #2 DE FUNCION CON CUPONES----------------

//validacion

// const cupones = ["abc123", "cuponMedio", "cuponMayor"];

// function validacionCupon(){
//     const inputPrecio = document.getElementById("inputPrice");
//     const valuePrecio = inputPrecio.value;

//     const inputCuponr = document.getElementById("inputCupon");
//     const valueCupon = inputCuponr.value;
// if(!cupones.includes(valueCupon)){ //el ! sirve para negar (practicamente decimos que si cupones NO incluye...)
//     alert(`el cupon ${valueCupon} no es valido`)
//     const inputP = document.getElementById("ResultP");
//     inputP.innerText = `el precio del producto es de ${valuePrecio}`;

// } else if(valueCupon === "abc123"){
//     descuento = 15;
// } else if(valueCupon === "cuponMedio"){
//     descuento = 25;
// } else if(valueCupon === "cuponMayor"){
//     descuento = 35;
// }

//     const precioConDescuento = calcularDescuento(valuePrecio, descuento);
    
//     const inputP = document.getElementById("ResultP");
//     inputP.innerText = `el precio con descuento es de ${precioConDescuento}`;




// }

//----------------SOLUCION #3 DE FUNCION CON CUPONES----------------

const cupones =[ //estamos generando un array de objetos para los cupones en el sistema
    {
        name: "abc123",
        discount: 15,
    },
    {
        name: "descuentoMediano",
        discount: 25,
    },
    {
        name: "descuentoGrande",
        discount: 35,
    }
];


function descuentoSolucion3(){
    const inputPrecio = document.getElementById("inputPrice");
    const valuePrecio = inputPrecio.value;

    const inputCuponr = document.getElementById("inputCupon");
    const valueCupon = inputCuponr.value;

const validacionDeCupon = function(cupones){
    return cupones.name === valueCupon;
}

const cuponDeUsuario = cupones.find(validacionDeCupon);

if (!cuponDeUsuario){
    alert(`el cupon ${valueCupon} no es valido`)
        const inputP = document.getElementById("ResultP");
        inputP.innerText = `el precio del producto es de ${valuePrecio}`;

}else{
    const descuento = cuponDeUsuario.discount;
    const precioConDescuento = calcularDescuento(valuePrecio, descuento);

    const inputP = document.getElementById("ResultP");
    inputP.innerText = `el precio con descuento es de ${precioConDescuento}, el descuento recibido fue del ${descuento}%`;
}}


//funcion para limpiar campos
function limpiarCampos(){
    document.getElementById("inputPrice").value="";
    document.getElementById("inputCupon").value="";
    const inputp = document.getElementById("ResultP");

    inputp.innerText="";
    
}