const illinoisCities = [
  "Utica", "Valmeyer", "Vandalia", "Vernon Hills", "Verona",
  "Vienna", "Villa Grove", "Villa Park", "Viola", "Virden",
  "Virginia", "Wadsworth", "Walnut", "Walshville", "Wapella",
  "Warren", "Warrensburg", "Warrenville", "Warsaw", "Washburn",
  "Washington", "Waterloo", "Waterman", "Watseka", "Wauconda",
  "Waukegan", "Wayne", "Wayne City", "West Brooklyn", "West Chicago",
  "West Frankfort", "West Salem", "West Union", "West York", "Westchester",
  "Western Springs", "Westfield", "Westmont", "Westville", "Wheaton",
  "Wheeler", "Wheeling", "Whittington", "Willow Springs", "Willowbrook",
  "Wilmette", "Wilmington", "Winfield", "Winnebago", "Winnetka",
  "Winthrop Harbor", "Wonder Lake", "Wood Dale", "Wood River", "Woodridge",
  "Woodson", "Woodstock", "Worden", "Worth", "Wyanet",
  "Yorkville", "Zeigler", "Zion",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < illinoisCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(illinoisCities[i]);
}

module.exports = { batches };
