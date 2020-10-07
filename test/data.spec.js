import { filtrarRegion, filtrarTipos, ordenarAz, ordenarZa, ordenarPoder } from '../src/data.js';

// 2.1 Test para Botón Región:

const elegirRegion = [
  { "name": "raichu", "generation": { "name": "kanto" } },
  { "name": "chikorita", "generation": { "name": "johto" } },
  { "name": "sandshrew", "generation": { "name": "kanto" } },
  { "name": "totodile", "generation": { "name": "johto" } },
  { "name": "nidorina", "generation": { "name": "kanto" } },
  { "name": "sentret", "generation": { "name": "johto" } }
]

const filtrarJohto = [
  { "name": "chikorita", "generation": { "name": "johto" } },
  { "name": "totodile", "generation": { "name": "johto" } },
  { "name": "sentret", "generation": { "name": "johto" } }
]

const filtrarKanto = [
  { "name": "raichu", "generation": { "name": "kanto" } },
  { "name": "sandshrew", "generation": { "name": "kanto" } },
  { "name": "nidorina", "generation": { "name": "kanto" } }
]

describe('filtrarRegion', () => {
  it('es una función', () => {
    expect(typeof filtrarRegion).toBe('function');
  });

  it('selecciona los pokemon de la región Johto', () => {
    expect(filtrarRegion(elegirRegion, 'johto')).toEqual(filtrarJohto);
  });

  it('selecciona los pokemon de la región Kanto', () => {
    expect(filtrarRegion(elegirRegion, 'kanto')).toEqual(filtrarKanto);
  });
});

// 3.1 Test para Botón Tipos Elementales:

const elegirTipo = [
  { "name": "caterpie", "type": ["bug"] },
  { "name": "dragonite", "type": ["dragon", "flying"] },
  { "name": "entei", "type": ["fire"] },
  { "name": "parasect", "type": ["bug", "grass"] },
  { "name": "kingdra", "type": ["water", "dragon"] },
  { "name": "charizard", "type": ["fire", "flying"] },
  { "name": "pinsir", "type": ["bug"] },
  { "name": "dratini", "type": ["dragon"] },
  { "name": "charmander", "type": ["fire"] }
]

const filtrarBug = [
  { "name": "caterpie", "type": ["bug"] },
  { "name": "parasect", "type": ["bug", "grass",] },
  { "name": "pinsir", "type": ["bug"] }
]

const filtrarDragon = [
  { "name": "dragonite", "type": ["dragon", "flying"] },
  { "name": "kingdra", "type": ["water", "dragon"] },
  { "name": "dratini", "type": ["dragon"] },
]

const filtrarFire = [
  { "name": "entei", "type": ["fire"] },
  { "name": "charizard", "type": ["fire", "flying"] },
  { "name": "charmander", "type": ["fire"] }
]

describe('filtrarTipos', () => {
  it('es una función', () => {
    expect(typeof filtrarTipos).toBe('function');
  });
  it('selecciona los pokemon del tipo Bug', () => {
    expect(filtrarTipos(elegirTipo, 'bug')).toEqual(filtrarBug);
  });
 
  it('selecciona los pokemon del tipo Dragon', () => {
    expect(filtrarTipos(elegirTipo, 'dragon')).toEqual(filtrarDragon);
  });
 
  it('selecciona los pokemon del tipo Fire', () => {
    expect(filtrarTipos(elegirTipo, 'fire')).toEqual(filtrarFire);
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
  { "name": "pikachu", "stats": { "base-attack": "112", "base-defense": "96", "base-stamina": "111" } },
  { "name": "raichu", "stats": { "base-attack": "193", "base-defense": "151", "base-stamina": "155" } },
  { "name": "sandshrew", "stats": { "base-attack": "126", "base-defense": "120", "base-stamina": "137" } }
]

const pokemonFuerte = [
  { "name": "raichu", "stats": { "base-attack": "193", "base-defense": "151", "base-stamina": "155" } },
  { "name": "sandshrew", "stats": { "base-attack": "126", "base-defense": "120", "base-stamina": "137" } },
  { "name": "pikachu", "stats": { "base-attack": "112", "base-defense": "96", "base-stamina": "111" } }
]

describe('ordenarPoder', () => {
  it('es una función', () => {
    expect(typeof ordenarPoder).toBe('function');
  });

  it('Mostrar el pokemon más fuerte', () => {
    expect(ordenarPoder(fuerza, 'Mas fuerte')).toEqual(pokemonFuerte);
  });
});