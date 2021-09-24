const { expect } = require('@jest/globals');
const sum = require('../sum');


// Parte uno de Test (Passed)

test('Suma 1 + 2 y el resultado sera 3', () => {
    expect( sum(1, 2) ).toBe(3);
})

// Parte dos de Test (Passed)

test('Suma 1 + 2 y el resultado NO sera 2', () => {
    expect(sum(1, 2)).not.toBe('12');
})
