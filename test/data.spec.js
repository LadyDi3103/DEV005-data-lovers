// import { example, anotherExample } from '../src/data.js';


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
import { sortData, filtrar, filtrar1 } from "../src/data.js";
describe("sortData", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof sortData).toBe("function");
  });
  it("Deberia retorna el array ordenado de A-Z", () => {
    const ordenadoAZ = {
      namePokemon: [
        { name: "bulbasaur" },
        { name: "ivysaur" },
        { name: "venusaur" },
        { name: "charmander" },
      ],
    };
    const Result = {
      namePokemonOrdenadoAZ: [
        { name: "bulbasaur" },
        { name: "charmander" },
        { name: "ivysaur" },
        { name: "venusaur" },
      ],
    };
    expect(sortData(ordenadoAZ, "name")).toBe(Result, "name");
  });
});

describe("sortData", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof sortData).toBe("function");
  });
  it("Deberia retorna el array ordenado de Z-A", () => {
    const sortData = {
      namePokemon: [
        { name: "bulbasaur" },
        { name: "ivysaur" },
        { name: "venusaur" },
        { name: "charmander" },
      ],
    };
    const Result = {
      namePokemonOrdenadoZA: [
        { name: "venusaur" },
        { name: "ivysaur" },
        { name: "charmander" },
        { name: "bulbasaur" },
      ],
    };
    expect(sortData(ordenadoZA, "name")).toBe(Result, "name");
  });
});

describe("filtrar", () => {
  it("Deberia ser una funcion", () => {
    expect(typeof filtrar).toBe("function");
  });
  it("Deberia retorna el array filtrado por tipo", () => {
    const tiposdePokemones = [
      { type: "grass" },
      { type: "fire" },
      { type: "ice" },
      { type: "normal" },
    ]
    const Result2 = [{type: "grass"}]
    expect(filtrar(tiposdePokemones, "grass")).toEqua1(Result2);
  });
});
describe("filtrar1", () => {
("Deberia ser una funcion que busque por nombre de pokemon", () => {
    expect(typeof filtrar1).toBe("function");
})
  it('Deberia retornar el pokemon buscado por el usuario', () => {
    const pokemonPorNombre = [
      {name: "bulbasaur"} 
    ]
expect(filtrar1( pokemonPorNombre, "bulbasaur")).toEqual(pokemonPorNombre);     
  });
});
   