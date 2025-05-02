const apiClient = require('../utils/apiClient');

async function fetchLaunches(filter = {}) {
  try {
    const response = await apiClient.get('https://ll.thespacedevs.com/2.2.0/launch/upcoming/');
    
    let launches = response.data.results.map(launch => ({
      mission: launch.name,
      vehicle: launch.rocket.configuration.name,
      date: launch.net
    }));

    if (filter.date) {
      launches = launches.filter(l => l.date.startsWith(filter.date));
    }

    return launches.length ? launches : ['no upcoming launches found'];
  } catch (err) {
    throw new Error(`failed :( ${err.message}`);
  }
}

module.exports = { fetchLaunches };
