const axios = require('axios');
const NASA_API_KEY = process.env.API_KEY; 

async function getApod() {
  try {
    const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    const { title, explanation, date, url } = res.data;
    return { title, explanation, date, url };
  } catch (err) {
    throw new Error('Failed to fetch APOD data');
  }
}

module.exports = { getApod };
