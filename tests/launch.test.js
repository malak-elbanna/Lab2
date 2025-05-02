const { fetchLaunches } = require('../services/launch');

test('fetchLaunches should return a list of launches or fallback', async () => {
  const data = await fetchLaunches();
  expect(Array.isArray(data)).toBe(true);
});
