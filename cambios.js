function enter(calcular){
var elem = document.getElementById("inputValores");
     elem.onkeyup = function(e){
         if(e.key === 'Enter'){
             calcular();
         }
     }
   }

 function titulosMedia(){
    const tituloEstadistica = document.getElementById("titulo");
    const descEstadistica = document.getElementById("desc");
    const botonEstadistica = document.getElementById("boton");
    const inputP = document.getElementById("resultadoP");

    tituloEstadistica.textContent ="Media";
    descEstadistica.textContent ="media";
    botonEstadistica.textContent="calcular media"
    inputP.textContent="";
     
    const boton = document.getElementById("btnmedia");
    boton.style.cssText=`
    background-color: white;
    color: rgb(56, 133, 206);
    font-weight: bold;
    `;

    const boton1 = document.getElementById("btnmediana");
    boton1.style.cssText=`
    `;
    const boton2 = document.getElementById("btnmoda");
    boton2.style.cssText=`
    `;

    boton2.className="";
    
    const calcular = document.getElementById("boton");
    calcular.onclick=media;

   cambiar = enter(media); 
    
    
 }


 function titulosModa(){
   const tituloEstadistica = document.getElementById("titulo");
   const descEstadistica = document.getElementById("desc");
   const botonEstadistica = document.getElementById("boton");
   const inputP = document.getElementById("resultadoP");

   tituloEstadistica.textContent ="Moda";
   descEstadistica.textContent ="moda";
   botonEstadistica.textContent="calcular moda"
   inputP.textContent="";
   const boton = document.getElementById("btnmoda");
   boton.style.cssText=`
   background-color: white;
   color: rgb(56, 133, 206);
   font-weight: bold;
   `;

   const boton1 = document.getElementById("btnmedia");
   boton1.style.cssText=`

   `;
   const boton2 = document.getElementById("btnmediana");
   boton2.style.cssText=`

   `;

   const calcular = document.getElementById("boton");
   calcular.onclick=calcularModa;
   cambiar = enter(calcularModa); 
   
}




function titulosMediana(){
   const tituloEstadistica = document.getElementById("titulo");
   const descEstadistica = document.getElementById("desc");
   const botonEstadistica = document.getElementById("boton");
   const inputP = document.getElementById("resultadoP");

   tituloEstadistica.textContent ="Mediana";
   descEstadistica.textContent ="mediana";
   botonEstadistica.textContent="calcular mediana"
   inputP.textContent="";

   const boton = document.getElementById("btnmediana");
   boton.style.cssText=`
   background-color: white;
   color: rgb(56, 133, 206);
   font-weight: bold;
   `;

   const boton1 = document.getElementById("btnmedia");
   boton1.style.cssText=`

   `;

   const boton2 = document.getElementById("btnmoda");
   boton2.style.cssText=`

   `;

   boton2.className="";
   
   const calcular = document.getElementById("boton");
   calcular.onclick=calcularMediana;
   cambiar = enter(calcularMediana); 
   
}






