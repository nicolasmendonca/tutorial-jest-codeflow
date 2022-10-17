function log(...args) {
  const DISPLAY_LOG = false;

  if (!DISPLAY_LOG) return;
  console.log(...args);
}

test('mockImplementation', () => {
  console.clear();
  const myMock = jest
    .fn(() => log('callback declaration'))
    .mockImplementationOnce(() => log('mockImplementationOnce 1'))
    .mockImplementationOnce(() => log('mockImplementationOnce 2'))
    .mockImplementation(() => log('mockImplementation 1'))
    .mockImplementation(() => log('mockImplementation 2'));

  Array(5)
    .fill(null)
    .forEach(() => {
      myMock();
    });

  // mockImplementationOnce 1
  // mockImplementationOnce 2
  // mockImplementation 2
  // mockImplementation 2
});
