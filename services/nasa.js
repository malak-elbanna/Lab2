const apiClient = require('../utils/apiClient');
const NASA_API_KEY = process.env.API_KEY; 

async function getAPOD() {
  try {
    const res = await apiClient.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    const { title, explanation, date, url } = res.data;
    return { title, explanation, date, url };
  } catch (err) {
    throw new Error('failed to fetch APOD');
  }
}

module.exports = { getAPOD };
