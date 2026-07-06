const illinoisCities = [
  "Round Lake", "Rushville", "Saint Anne", "Saint Charles", "Saint Jacob",
  "Saint Joseph", "Saint Libory", "Salem", "Sandwich", "Savanna",
  "Savoy", "Saybrook", "Scales Mound", "Schaumburg", "Scheller",
  "Schiller Park", "Scott", "Seaton", "Secor", "Seneca",
  "Shabbona", "Shannon", "Shawneetown", "Shelbyville", "Sherman",
  "Shipman", "Shorewood", "Sidney", "Sigel", "Silvis",
  "Skokie", "Smithton", "Somonauk", "Sorento", "South Beloit",
  "South Elgin", "South Holland", "Sparland", "Sparta", "Spring Grove",
  "Spring Valley", "Springfield", "Stanford", "Staunton", "Steger",
  "Sterling", "Stewardson", "Stillman Valley", "Stockton", "Stone Park",
  "Strasburg", "Streamwood", "Streator", "Stronghurst", "Sugar Grove",
  "Sullivan", "Summit Argo", "Sutter", "Sycamore", "Tallula",
  "Tamaroa", "Taylor Ridge", "Taylorville", "Teutopolis", "Thawville",
  "Thomasboro", "Thompsonville", "Thomson", "Thornton", "Tinley Park",
  "Toledo", "Tolono", "Towanda", "Tremont", "Trenton",
  "Troy", "Tuscola", "Union", "University Park", "Urbana",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < illinoisCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(illinoisCities[i]);
}

module.exports = { batches };
