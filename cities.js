const illinoisCities = [
  "Orangeville", "Oreana", "Oregon", "Orion", "Orland Park",
  "Oswego", "Ottawa", "Ozark", "Palatine", "Palmer",
  "Palos Heights", "Palos Hills", "Palos Park", "Pana", "Paris",
  "Park Forest", "Park Ridge", "Patoka", "Paw Paw", "Pawnee",
  "Paxton", "Pearl City", "Pecatonica", "Pekin", "Peoria",
  "Peoria Heights", "Peotone", "Peru", "Petersburg", "Philo",
  "Pinckneyville", "Pittsfield", "Plainfield", "Plano", "Pleasant Hill",
  "Pleasant Plains", "Pocahontas", "Polo", "Pontiac", "Poplar Grove",
  "Prairie City", "Princeton", "Princeville", "Prophetstown", "Prospect Heights",
  "Quincy", "Raleigh", "Ramsey", "Rantoul", "Rapids City",
  "Raymond", "Red Bud", "Reynolds", "Richmond", "Richton Park",
  "Richview", "Ridge Farm", "Ridgway", "Ringwood", "River Forest",
  "River Grove", "Riverdale", "Riverside", "Riverton", "Roanoke",
  "Robbins", "Robinson", "Rochelle", "Rochester", "Rock City",
  "Rock Falls", "Rock Island", "Rockbridge", "Rockford", "Rockton",
  "Rolling Meadows", "Romeoville", "Roodhouse", "Roscoe", "Roselle",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < illinoisCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(illinoisCities[i]);
}

module.exports = { batches };
