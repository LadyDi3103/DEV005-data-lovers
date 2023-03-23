
import data from './data/pokemon/pokemon.js';
import {sortData,filtrar,filtrar1} from "./data.js";

const pokemones = data.pokemon;

const headerHtml = document.getElementById("headerHtml");
headerHtml.style.display = "none";

const section0 = document.getElementById("section0");
const container = document.getElementById("contieneTodosLosPokemones");
container.style.display = "none";

const btnEmpezar = document.getElementById("empezar");
btnEmpezar.addEventListener("click",()=>{
  section0.style.display = "none";
  container.style.display = "grid";
  headerHtml.style.display = "block";
});

section0.style.display = "block";

function pintar(data){
  let todos = '';
  //data.forEach((elemento) => {
  for (let i = 0; i < data.length; i++){
    todos += `
<div class="Cards">
<p class="hp"><span>HP </span>${data[i].stats["max-hp"]}</p>
<img src=${data[i].img} alt="Imágenes de Pokemones" class="imgCard">
<p class="poke-name">${data[i].name.toUpperCase()}</p>
<p class="poke-number">Nº ${data[i].num}</p>
<p class="types">${data[i].type}</p>
</div>
   `
  }
  document.getElementById('contieneTodosLosPokemones').innerHTML = todos;
}
pintar(pokemones);
//Ordenar pokemon de la (A-Z)&(Z-A)
document.getElementById("ordenar").addEventListener("change", (event) => {
  //console.log("veamos el evento", event.target.value);
  const option = event.target.value;
  if (option === "TODOS") {
    pintar(pokemones);
    //MuestraTodoslosCards(pokemones);
  } else if (option === "A-Z") {
    const resultadoAZ = sortData(pokemones);
    pintar(resultadoAZ);
  } else {
    const resultadoZA = sortData(pokemones); 
    pintar(resultadoZA.reverse());
  }
});
//Filtrar pokemon por tipo
document.getElementById("tipo").addEventListener("change", (event) => {
  const optionType = event.target.value;
  const filtrado = filtrar(pokemones, optionType);
  pintar(filtrado);
});
//Buscar pokemon por Nombre
document.getElementById("searchPokemones").addEventListener("change", (event) => {
  const filtroName = event.target.value;
  const filtrado = filtrar1(pokemones, filtroName);
  pintar (filtrado);
  //if (filtroName.length === "0") {
  //  alert("No se encontraron resultados");
  //}
});
