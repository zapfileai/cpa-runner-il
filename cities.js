const illinoisCities = [
  "Addieville", "Addison", "Albers", "Albion", "Alden",
  "Aledo", "Algonquin", "Alhambra", "Allendale", "Alsip",
  "Altamont", "Alton", "Altona", "Amboy", "Anna",
  "Antioch", "Apple River", "Arcola", "Arenzville", "Argenta",
  "Arlington Heights", "Armington", "Arthur", "Ashley", "Ashmore",
  "Assumption", "Astoria", "Athens", "Atkinson", "Atlanta",
  "Auburn", "Aurora", "Aviston", "Avon", "Baldwin",
  "Barrington", "Barry", "Bartelso", "Bartlett", "Batavia",
  "Batchtown", "Beardstown", "Beecher", "Belknap", "Belleville",
  "Bellwood", "Belvidere", "Bement", "Bensenville", "Benton",
  "Berkeley", "Berwyn", "Bethalto", "Bethany", "Big Rock",
  "Bloomingdale", "Bloomington", "Blue Island", "Bluffs", "Bluford",
  "Bolingbrook", "Bone Gap", "Bonfield", "Bourbonnais", "Bradford",
  "Bradley", "Braidwood", "Breese", "Bridgeport", "Bridgeview",
  "Brighton", "Brimfield", "Broadview", "Brocton", "Brookfield",
  "Brookport", "Buda", "Buffalo", "Buffalo Grove", "Burbank"
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < illinoisCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(illinoisCities[i]);
}

module.exports = { batches };
