const substract = require('../substract');

test('Resta 1 - 2 y el Resultado SI es -1', () => {
    expect(substract(1, 2)).toBe(-1)
})