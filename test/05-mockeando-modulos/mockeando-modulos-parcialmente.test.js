import { pokemonesAxiosService } from '../../src/servicios/pokemonesAxiosService';

async function getPokemonesCount() {
  const pokemonList = await pokemonesAxiosService();
  return pokemonList.length;
}

const pokemonListMock = ['Ditto', 'Pikachu', 'Magikarp'];

jest.mock('axios', () => {
  const moduloOriginal = jest.requireActual('axios');

  const getMock = jest.fn().mockResolvedValue({ data: pokemonListMock });

  return {
    __esModule: true,
    default: {
      ...moduloOriginal.default,
      get: getMock,
    },
  };
});

test('getPokemonesCount devuelve la cuenta de pokemones', async () => {
  // Act
  const pokemonesCount = await getPokemonesCount();

  // Assert
  expect(pokemonesCount).toBe(pokemonListMock.length);
});

// axios.post va a generar una llamada a la API!
