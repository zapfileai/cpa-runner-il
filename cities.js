const illinoisCities = [
  "Burlington", "Byron", "Cairo", "Caledonia", "Calumet City",
  "Cambridge", "Camp Grove", "Canton", "Carbondale", "Carlinville",
  "Carlock", "Carlyle", "Carmi", "Carol Stream", "Carpentersville",
  "Carrier Mills", "Carrollton", "Carterville", "Carthage", "Cary",
  "Casey", "Caseyville", "Catlin", "Centralia", "Champaign",
  "Chana", "Channahon", "Chapin", "Charleston", "Chatham",
  "Chenoa", "Cherry Valley", "Chester", "Chestnut", "Chicago",
  "Chicago Heights", "Chicago Ridge", "Chillicothe", "Cicero", "Cissna Park",
  "Clare", "Claremont", "Clarendon Hills", "Clifton", "Clinton",
  "Coal City", "Coal Valley", "Coffeen", "Collinsville", "Colona",
  "Columbia", "Congerville", "Cordova", "Cornell", "Cortland",
  "Coulterville", "Country Club Hills", "Creal Springs", "Crest Hill", "Crete",
  "Creve Coeur", "Crossville", "Crystal Lake", "Dahinda", "Danvers",
  "Danville", "Darien", "Davis", "De Soto", "Decatur",
  "Deer Creek", "Deerfield", "Dekalb", "Delavan", "Depue",
  "Des Plaines", "Dieterich", "Dix", "Dixon", "Dolton",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < illinoisCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(illinoisCities[i]);
}

module.exports = { batches };
