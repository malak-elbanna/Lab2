const axios = require('axios');
const NASA_API_KEY = process.env.API_KEY; 

async function getAPOD() {
  try {
    const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    const { title, explanation, date, url } = res.data;
    return { title, explanation, date, url };
  } catch (err) {
    throw new Error('failed to fetch APOD');
  }
}

module.exports = { getAPOD };
