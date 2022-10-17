const calculadora = (numero1, numero2, operacion) => {
  return operacion(numero1, numero2);
};

test('matchersParaMocks', () => {
  // Arrange
  const numero1 = 101;
  const numero2 = 102;
  const operaciones = jest
    .fn()
    .mockReturnValueOnce(203)
    .mockReturnValueOnce(-1)
    .mockReturnValueOnce(10302);

  // Act
  Array(3)
    .fill(null)
    .forEach(() => {
      calculadora(numero1, numero2, operaciones);
    });

  // Assert
  expect(operaciones).toHaveBeenCalled();
  expect(operaciones).toHaveBeenCalledTimes(3);
  expect(operaciones).toHaveBeenNthCalledWith(1, 101, 102);
  expect(operaciones).toHaveBeenNthCalledWith(2, 101, 102);
  expect(operaciones).toHaveBeenNthCalledWith(3, 101, 102);
  expect(operaciones).toHaveBeenLastCalledWith(101, 102);
  expect(operaciones).toHaveLastReturnedWith(10302);
});
