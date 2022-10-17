import { suma } from '../../src/suma';

test.each([
  [1, 2, 3],
  [2, 2, 4],
  [5, 7, 12],
  [0, -1, -1],
])(
  'suma devuelve el resultado de una suma de dos valores',
  (sumando1, sumando2, resultadoEsperado) => {
    // Act
    const resultadoObtenido = suma(sumando1, sumando2);

    // Assert
    expect(resultadoEsperado).toBe(resultadoObtenido);
  }
);
