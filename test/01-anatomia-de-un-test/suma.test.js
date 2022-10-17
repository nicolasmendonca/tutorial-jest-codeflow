import { suma } from '../../src/suma';

test('suma devuelve el resultado de una suma de dos valores', () => {
  // Arrange
  const sumando1 = 1;
  const sumando2 = 2;
  const resultadoEsperado = 3;

  // Act
  const resultadoObtenido = suma(sumando1, sumando2);

  // Assert
  expect(resultadoObtenido).toBe(resultadoEsperado);
});
