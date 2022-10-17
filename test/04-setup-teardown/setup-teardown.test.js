// Credit goes to https://jestjs.io/docs/setup-teardown

function log(...args) {
  const DISPLAY_LOG = false;

  if (!DISPLAY_LOG) return;
  console.log(...args);
}

describe('group 1', () => {
  beforeAll(() => log('1 - beforeAll'));
  afterAll(() => log('1 - afterAll'));
  beforeEach(() => log('1 - beforeEach'));
  afterEach(() => log('1 - afterEach'));

  test('', () => log('1 - test'));

  describe('Scoped / Nested block', () => {
    beforeAll(() => log('2 - beforeAll'));
    afterAll(() => log('2 - afterAll'));
    beforeEach(() => log('2 - beforeEach'));
    afterEach(() => log('2 - afterEach'));

    test('', () => log('2 - test'));
  });
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
