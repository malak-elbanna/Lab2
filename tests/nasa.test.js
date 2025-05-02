const { getAPOD } = require('../services/nasa');

test('getAPOD should return image details', async () => {
  const data = await getAPOD();
  expect(data).toHaveProperty('title');
  expect(data).toHaveProperty('date');
  expect(data).toHaveProperty('url');
});
