import { filtrarRegion, filtrarTipos, ordenarAz, ordenarZa, ordenarPoder, verPokemon } from './data.js';
import data from './data/pokemon/pokemon.js';

let mostrarPokemones = document.getElementById('mostrarPokemon');
mostrarPokemones.innerHTML = data.pokemon.map(verPokemon).join(" ");

//1. Botón Buscar
const btnBuscar = document.querySelector('.buscar');
btnBuscar.addEventListener('keyup', () => {
  const buscador = data.pokemon.filter((item) => {
    return item.name.includes(btnBuscar.value);
  })
  mostrarPokemones.innerHTML = buscador.map(verPokemon).join(" ");
});

//2.2 Botón para filtrar por Región
let select1 = document.getElementById('sel1');
select1.addEventListener('change', function () {
  mostrarPokemones.innerHTML = filtrarRegion(data.pokemon, select1.value).map(verPokemon).join(" ");
});

//3.2 Botón para seleccionar cada Tipo Elemental de Pokemon
let select2 = document.getElementById('sel2');
select2.addEventListener('change', function () {
  mostrarPokemones.innerHTML = filtrarTipos(data.pokemon, select2.value).map(verPokemon).join(" ");
});

//4.2 Botón para ordenar de la A-Z y Z-A
let select3 = document.getElementById('sel3');
select3.addEventListener('change', function (evento) {
  const selValue = evento.target.value; // repasarlo
  let ordenar = [];
  if (selValue === 'deLaA-Z') {
    ordenar = ordenarAz(data.pokemon);
  } else if (selValue === 'deLaZ-A') {
    ordenar = ordenarZa(data.pokemon);
  }
  mostrarPokemones.innerHTML = ordenar.map(verPokemon).join(" ");
});

//5.3 Botón Cálculo (los 10 más fuertes):
let select4 = document.querySelector('#sel4');
select4.addEventListener('click', function () {
  mostrarPokemones.innerHTML = ordenarPoder(data.pokemon).map(verPokemon).join(" ");
});