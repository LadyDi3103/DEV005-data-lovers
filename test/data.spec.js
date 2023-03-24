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

import { sortData,filtrar,filtrar1, calcular } from '../src/data.js';

const 





describe('sortData', () => {
  it('Debe ordenar de la (A-Z)', () => {
    expect(typeof sortData).toBe('function');
  });
  it('Debe ordenar de la (Z-A)', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns `sortData`', () => {
    expect(sortData()).toBe('function');
  });
});

describe('filtrar', () => {
  it('is a function', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('returns `filtrar`', () => {
    expect(filtrar()).toBe('function');
  });
});

describe('filtrar1', () => {
  it('is a function', () => {
    expect(typeof filtrar1).toBe('function');
  });
  
  it('returns `filtrar1`', () => {
    expect(filtrar1()).toBe('funtion');
  });
});

describe('calcular', () => {
  it('is a function', () => {
    expect(typeof calcular).toBe('function');
  });
  
  it('returns `calcular`', () => {
    expect(calcular()).toBe('function');
  });
});