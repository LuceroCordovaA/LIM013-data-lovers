import { filtrarRegion, filtrarTipos, ordenarAz, ordenarZa, ordenarPoder } from '../src/data.js';

// 2.1 Test para Botón Región:

const elegirRegion = [
  { "name": "raichu", "generation": "kanto" },
  { "name": "chikorita", "generation": "johto" }, 
  { "name": "sandshrew", "generation": "kanto" },
  { "name": "totodile", "generation": "johto" },
  { "name": "nidorina", "generation": "kanto" },
  { "name": "sentret", "generation": "johto" }
]

const filtrarJohto = [
  { "name": "chikorita", "generation": "johto" }, 
  { "name": "totodile", "generation": "johto" },
  { "name": "sentret", "generation": "johto" }
]

const filtrarKanto = [
  { "name": "raichu", "generation": "kanto" },
  { "name": "sandshrew", "generation": "kanto" },
  { "name": "nidorina", "generation": "kanto" },
]

describe('filtrarRegion', () => {
  it('es una función', () => {
    expect(typeof filtrarRegion).toBe('function');
  });

  it('selecciona los pokemon de la región Johto', () => {
    expect(filtrarRegion(elegirRegion, 'Johto')).toEqual(filtrarJohto);
  });

  it('selecciona los pokemon de la región Kanto', () => {
    expect(filtrarRegion(elegirRegion, 'Kanto')).toEqual(filtrarKanto);
  });
});

// 3.1 Test para Botón Tipos Elementales:

const elegirTipo = [
  { "name": "bulbasaur", "type": "grass" },
  { "name": "piloswine", "type": "ice" },
  { "name": "squirtle", "type": "water" },
  { "name": "dragonite", "type": "dragon" },
  { "name": "dragonair", "type": "dragon" },
  { "name": "articuno", "type": "ice" }
]

const filtrarDragon = [
  { "name": "dragonite", "type": "dragon" },
  { "name": "dragonair", "type": "dragon" }
]

const filtrarIce = [
  { "name": "piloswine", "type": "ice" },
  { "name": "articuno", "type": "ice" }
]

describe('filtrarTipos', () => {
  it('es una función', () => {
    expect(typeof filtrarTipos).toBe('function');
  });

  it('selecciona los pokemon del tipo Dragon', () => {
    expect(filtrarTipos(elegirTipo, 'Dragon')).toEqual(filtrarDragon);
  });

  it('selecciona los pokemon del tipo Ice', () => {
    expect(filtrarTipos(elegirTipo, 'Ice')).toEqual(filtrarIce);
  });
});

// 4.1 Test para Ordenar de la A-Z y de la Z-A
const ordenarNombre = [
  { "name": "bulbasaur" },
  { "name": "clefable" },
  { "name": "abra" }
]

const ordenAz = [
  { "name": "abra" },
  { "name": "bulbasaur" },
  { "name": "clefable" }
]

const ordenZa = [
  { "name": "clefable" },
  { "name": "bulbasaur" },
  { "name": "abra" }
]

describe('ordenarAz', () => {
  it('es una función', () => {
    expect(typeof ordenarAz).toBe('function');
  });

  it('ordenar de la A a la Z', () => {
    expect(ordenarAz(ordenarNombre, 'A-Z')).toEqual(ordenAz);
  });
});

describe('ordenarZa', () => {
  it('es una función', () => {
    expect(typeof ordenarZa).toBe('function');
  });

  it('ordenar de la Z a la A', () => {
    expect(ordenarZa(ordenarNombre, 'Z-A')).toEqual(ordenZa);
  });
});

// 5.1 Test para Botón Cálculo:
const fuerza = [
  { "name": "pikachu", "base-attack": "112", "base-defense": "96", "base-stamina": "111" }, 
  { "name": "raichu", "base-attack": "193", "base-defense": "151", "base-stamina": "155" }, 
  { "name": "sandshrew", "base-attack": "126", "base-defense": "120", "base-stamina": "137" } 
]

const pokemonFuerte = [
  { "name": "raichu", "base-attack": "193", "base-defense": "151", "base-stamina": "155" }
]

describe('ordenarPoder', () => {
  it('es una función', () => {
    expect(typeof ordenarPoder).toBe('function');
  });

  it('Mostrar pokemon más fuerte', () => {
    expect(ordenarPoder(fuerza, 'Mas fuerte')).toEqual(pokemonFuerte);
  });
});