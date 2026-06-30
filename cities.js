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

const batches = {
  1: illinoisCities.slice(0, 20),
  2: illinoisCities.slice(20, 40),
  3: illinoisCities.slice(40, 60),
  4: illinoisCities.slice(60, 80),
};

module.exports = { batches };
