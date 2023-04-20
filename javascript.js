alert("Bienvenidos a la WEB DEL ESTOICO")

var nombre = "Andres Guillermo Rodriguez Molina";
var edad = 32;
var estoico = "SI";

var datos = document.getElementById("datos");

datos.innerHTML=`
<h2>Presentación</h2>
<h2>Mi nombre es: ${nombre}</h2>
<h2>Mi edad es: ${edad}</h2>
<h2>Soy estoico ${estoico}</h2>
`;

//sentencia condicional

if(estoico == "SI"){

    datos.innerHTML +=`<h2>Recuerda las 4 virtudes</h2>`;
}
else
{
    datos.innerHTML +=`<h2>debes ojear mas esta pagina</h2>`;
}