// const mockCallback = jest.fn(x => 42 + x);
// forEach([0, 1], mockCallback);

// // The mock function is called twice
// expect(mockCallback.mock.calls.length).toBe(2);

// // The first argument of the first call to the function was 0
// expect(mockCallback.mock.calls[0][0]).toBe(0);

// // The first argument of the second call to the function was 1
// expect(mockCallback.mock.calls[1][0]).toBe(1);

// // The return value of the first call to the function was 42
// expect(mockCallback.mock.results[0].value).toBe(42);

import axios from 'axios';
import { pokemonesAxiosService } from '../../src/servicios/pokemonesAxiosService';

async function getPokemonesCount() {
  const pokemonList = await pokemonesAxiosService();
  return pokemonList.length;
}

jest.mock('axios');

test('getPokemonesCount devuelve la cuenta de pokemones', async () => {
  // Arrange
  const pokemonListMock = ['Ditto', 'Pikachu', 'Magikarp'];
  axios.get.mockResolvedValue({ data: pokemonListMock });

  // Act
  const pokemonesCount = await getPokemonesCount();

  // Assert
  expect(pokemonesCount).toBe(pokemonListMock.length);
});
