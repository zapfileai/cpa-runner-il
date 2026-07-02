const illinoisCities = [
  "Donovan", "Dorsey", "Downers Grove", "Downs", "Du Quoin",
  "Dubois", "Dundee", "Dunlap", "Durand", "Dwight",
  "East Alton", "East Carondelet", "East Dubuque", "East Galesburg", "East Moline",
  "East Peoria", "East Saint Louis", "Edelstein", "Edinburg", "Edwards",
  "Edwardsville", "Effingham", "El Paso", "Elburn", "Eldorado",
  "Elgin", "Elizabethtown", "Elk Grove Village", "Elkhart", "Ellery",
  "Ellisville", "Elmhurst", "Elmwood", "Elmwood Park", "Elwood",
  "Emden", "Energy", "Enfield", "Erie", "Essex",
  "Eureka", "Evanston", "Evergreen Park", "Fairbury", "Fairfield",
  "Fairview Heights", "Farmersville", "Farmington", "Fisher", "Flat Rock",
  "Flora", "Flossmoor", "Forest Park", "Forreston", "Forsyth",
  "Fowler", "Fox Lake", "Fox River Grove", "Frankfort", "Franklin",
  "Franklin Grove", "Franklin Park", "Freeburg", "Freeport", "Fulton",
  "Fults", "Galena", "Galesburg", "Galva", "Garden Prairie",
  "Gardner", "Geff", "Geneseo", "Geneva", "Genoa",
  "Georgetown", "Gerlaw", "Germantown", "Gibson City", "Gifford",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < illinoisCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(illinoisCities[i]);
}

module.exports = { batches };
