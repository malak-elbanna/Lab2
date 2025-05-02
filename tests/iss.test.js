const { fetchISS } = require('../services/iss');

test('fetchISSLocation should return coordinates and timestamp', async () => {
  const data = await fetchISS();
  expect(data).toHaveProperty('time');
  expect(data).toHaveProperty('latitude');
  expect(data).toHaveProperty('longitude');
});
