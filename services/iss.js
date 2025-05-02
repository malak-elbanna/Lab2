const apiClient = require('../utils/apiClient');

async function fetchISS() {
  try {
    const response = await apiClient.get('http://api.open-notify.org/iss-now.json');
    const { timestamp, iss_position } = response.data;
    return {
      time: new Date(timestamp * 1000).toISOString(),
      latitude: iss_position.latitude,
      longitude: iss_position.longitude
    };
  } catch (err) {
    throw new Error(`failed to fetch ISS location :((: ${err.message}`);
  }
}
module.exports = { fetchISS };
