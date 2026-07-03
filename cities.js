const illinoisCities = [
  "Gilberts", "Gillespie", "Gilman", "Girard", "Gladstone",
  "Glasford", "Glen Carbon", "Glen Ellyn", "Glenarm", "Glencoe",
  "Glendale Heights", "Glenview", "Glenwood", "Godfrey", "Golconda",
  "Golden", "Golf", "Goodfield", "Goreville", "Grand Ridge",
  "Granite City", "Grant Park", "Grantsburg", "Granville", "Grayslake",
  "Grayville", "Great Lakes", "Greenfield", "Greenview", "Greenville",
  "Gridley", "Griggsville", "Groveland", "Gurnee", "Hamilton",
  "Hampshire", "Hampton", "Hanna City", "Hanover Park", "Harrisburg",
  "Harvard", "Harvey", "Harwood Heights", "Havana", "Hazel Crest",
  "Henderson", "Hennepin", "Herrin", "Herscher", "Heyworth",
  "Hickory Hills", "Highland", "Highland Park", "Highwood", "Hillsboro",
  "Hillside", "Hinckley", "Hinsdale", "Hoffman Estates", "Homer",
  "Homer Glen", "Hometown", "Homewood", "Hoopeston", "Hopedale",
  "Hoyleton", "Hudson", "Hull", "Huntley", "Ingleside",
  "Ipava", "Irving", "Island Lake", "Itasca", "Iuka",
  "Jacksonville", "Jerseyville", "Johnston City", "Joliet", "Jonesboro",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < illinoisCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(illinoisCities[i]);
}

module.exports = { batches };
