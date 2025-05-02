require('dotenv').config();

const { getAPOD } = require('./services/nasa');
const { fetchISS } = require('./services/iss');
const { fetchLaunches } = require('./services/launch');

async function displayAPOD() {
  try {
    const data = await getAPOD();
    console.log('\n NASA Astronomy Picture of the Day');
    console.log(`title: ${data.title}`);
    console.log(`date: ${data.date}`);
    console.log(`URL: ${data.url}`);
    console.log(`desc: ${data.explanation}`);
  } catch (err) {
    console.error(err.message);
  }
}

async function ISSLocation() {
  console.log('\n ISS Location Tracker:');
  setInterval(async () => {
    try {
      const loc = await fetchISS();
      console.log(`[${loc.time}] Latitude: ${loc.latitude}, Longitude: ${loc.longitude}`);
    } catch (err) {
      console.error(err.message);
    }
  }, 10000);
}

async function displayLaunches() {
  try {
    const launches = await fetchLaunches();
    console.log('\n upcoming launches');
    launches.forEach((launch) => {
      if (typeof launch === 'string') return console.log(launch);
      console.log(`mission: ${launch.mission}`);
      console.log(`vehicle: ${launch.vehicle}`);
      console.log(`date: ${launch.date}\n`);
    });
  } catch (err) {
    console.error(err.message);
  }
}

(async () => {
  await displayAPOD();
  await displayLaunches();
  await ISSLocation();
})();
