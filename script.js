// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

/*
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

h1.innerText = "pauperro";
console.log(h1.getAttribute("pantalla"));
h1.setAttribute("class","rojo");

h1.classList.add("rojo")
h1.classList.remove("verde")
input.value = "456";

const img = document.createElement("img");//crear in elemento de html con js 
img.setAttribute("src","https://images.ecestaticos.com/h34TvzTFVdrau9Un4Wdmwhed_e4=/0x115:2265x1390/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8ec%2F08c%2F85c%2F8ec08c85c866ccb70c4f1c36492d890f.jpg")
console.log(img);

pid.innerHTML = "";// eliminar todo el contenido del #PID 
pid.append(img);//añadir la imagen dentro de un contenedor existente

*/

// Ejercicio donde se crea el resultado ingresando un nuevo p para el valor dado por los input
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener("submit", sumarInputValues); //addEventListenet se le dan dos cosas primero "nombre del evento" y de segundo "la funcion"

function sumarInputValues (event){
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "El resultado es: " + sumaInputs;
}








