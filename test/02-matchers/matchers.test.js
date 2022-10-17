import { suma } from '../../src/suma';
import { crearSuperUsuario } from '../../src/crearSuperUsuario';

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

test('crearSuperUsuario devuelve valores deseados', () => {
  // Arrange
  const usuarioEsperado = { id: 1, nombre: 'Mendo' };

  // Act
  const usuarioObtenido = crearSuperUsuario();

  // Assert
  expect(usuarioObtenido).toEqual(usuarioEsperado);
});

test('crearSuperUsuario devuelve [solo] valores deseados', () => {
  // Arrange
  const usuarioEsperado = { id: 1, nombre: 'Mendo' };

  // Act
  const usuarioObtenido = crearSuperUsuario();

  // Assert
  expect(usuarioObtenido).toStrictEqual(usuarioEsperado);
});

test('crearSuperUsuario contiene atributo { id: 1 }', () => {
  // Arrange
  const atributosEsperados = { id: 1 };

  // Act
  const usuarioObtenido = crearSuperUsuario();

  // Assert
  expect(usuarioObtenido).toMatchObject(atributosEsperados);
});

test('crearSuperUsuario contiene un atributo id numerico', () => {
  // Arrange
  const atributosEsperados = { id: expect.any(Number) };

  // Act
  const usuarioObtenido = crearSuperUsuario();

  // Assert
  expect(usuarioObtenido).toMatchObject(atributosEsperados);
});

test('crearSuperUsuario no devuelve un apellido', () => {
  // Arrange
  let usuarioObtenido = crearSuperUsuario();

  // Act

  // Assert
  expect(usuarioObtenido.apellido).toBeUndefined();
});

test('El superusuario contiene "end"', () => {
  // Arrange

  // Act
  const usuarioObtenido = crearSuperUsuario();

  // Assert
  expect(usuarioObtenido.nombre).toContain('end');
});

test('Un array contiene 3', () => {
  // Arrange
  const miArray = [1, 2, 3, 4, 5];

  // Assert
  expect(miArray).toContain(3);
});

const calcularPi = () => Math.PI;
test('aproximandonos a PI', () => {
  // Arrange
  let pi;

  // Act
  pi = calcularPi();

  // Assert
  expect(pi).toBeCloseTo(3.14, 2);
});

test('Todos los valores de un array son mayores a 5', () => {
  // Arrange
  const array = [6, 7, 8, 9, 100, 20];

  // Act

  // Assert
  array.forEach((valor) => {
    expect(valor).toBeGreaterThan(5);
  });
});
