import { crearSuperUsuarioAsync } from '../../src/crearSuperUsuarioAsync';

describe('Promise.then', () => {
  test('crear super usuario devuelve a mendo', () => {
    return crearSuperUsuarioAsync().then((superUsuario) => {
      expect(superUsuario).toStrictEqual({
        id: 1,
        nombre: 'Mendo',
      });
    });
  });
});

describe('async/await', () => {
  test('crear super usuario devuelve a mendo', async () => {
    const superUsuario = await crearSuperUsuarioAsync();
    expect(superUsuario).toStrictEqual({
      id: 1,
      nombre: 'Mendo',
    });
  });
});

describe('done', () => {
  test('crear super usuario devuelve a mendo', (done) => {
    crearSuperUsuarioAsync().then((superUsuario) => {
      expect(superUsuario).toStrictEqual({
        id: 1,
        nombre: 'Mendo',
      });
      done();
    });
  });
});

describe('.resolves. / .rejects.', () => {
  test('crear super usuario devuelve a mendo', () => {
    return expect(crearSuperUsuarioAsync()).resolves.toStrictEqual({
      id: 1,
      nombre: 'Mendo',
    });
  });
});
