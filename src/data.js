export const verPokemon = (datos) => {
  return `
  <section class="cardPokemon">
    <p class="numero"> ${datos.num} </p>
    <p class="nombre"> ${datos.name} </p>
    <img src="${datos.img}">
    <p>Tipo: ${datos.type}  <br>PC: ${Object.values(datos.stats)[3]}</p>
  </section>
  `;
};

//2.1 Botón para filtrar por Región
export const filtrarRegion = function (arr, condicion) {
  return arr.filter((character) => {
    return character.generation.name.includes(condicion);
  });
}

//3.1 Botón para seleccionar cada Tipo Elemental de Pokemon
export const filtrarTipos = function (arr, condicion) {
  return arr.filter((character) => {
    return character.type.includes(condicion);
  });
}

//4.1 Botón para ordenar de la A-Z y Z-A
export const ordenarAz = function (pokemon) {
  return pokemon.sort((a, b) => {

    if (a.name > b.name) {
      return 1;
    }
    else if (a.name < b.name) {
      return -1;
    }
    return 0;
  })
};

export const ordenarZa = function (pokemon) {
  return pokemon.sort((a, b) => {

    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });
};

//5.1 Botón Cálculo (los 10 más fuertes): Sumar el ataque, defensa y resistencia de cada pokemom

const sumarPoder = function (pokemon) {
  const ataque = parseInt(pokemon.stats["base-attack"]);
  const defensa = parseInt(pokemon.stats["base-defense"]);
  const resistencia = parseInt(pokemon.stats["base-stamina"]);
  return ataque + defensa + resistencia;
}

//5.2 Botón Cálculo (los 10 más fuertes): Mostrar de mayor a menor la fuerza
export const ordenarPoder = function (pokemon) {
  return pokemon.sort((pokemonA, pokemonB) => {
    const poderA = sumarPoder(pokemonA);
    const poderB = sumarPoder(pokemonB);

    if (poderA < poderB) {
      return 1;
    }
    else if (poderA > poderB) {
      return -1;
    }
    return 0;
  })
}