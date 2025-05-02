const axios = require('axios');

async function fetchLaunches(filter = {}) {
  try {
    const response = await axios.get('https://ll.thespacedevs.com/2.2.0/launch/upcoming/');
    let launches = response.data.results.map(launch => ({
      mission: launch.name,
      vehicle: launch.rocket.configuration.name,
      date: launch.net
    }));

    if (filter.date) {
      launches = launches.filter(l => l.date.startsWith(filter.date));
    }

    return launches.length ? launches : ['No upcoming launches found'];
  } catch (err) {
    throw new Error(`Failed to fetch upcoming launches: ${err.message}`);
  }
}

module.exports = { fetchLaunches };
