const illinoisCities = [
  "Medinah", "Medora", "Melrose Park", "Mendota", "Metamora",
  "Metropolis", "Middletown", "Midlothian", "Milan", "Milford",
  "Millbrook", "Milledgeville", "Millstadt", "Minier", "Minonk",
  "Minooka", "Modesto", "Mokena", "Moline", "Momence",
  "Monee", "Monmouth", "Monroe Center", "Montgomery", "Monticello",
  "Montrose", "Moro", "Morris", "Morrisonville", "Morton",
  "Morton Grove", "Mound City", "Mount Carmel", "Mount Carroll", "Mount Olive",
  "Mount Prospect", "Mount Pulaski", "Mount Vernon", "Mount Zion", "Moweaqua",
  "Mulkeytown", "Mundelein", "Murphysboro", "Naperville", "Nashville",
  "Nauvoo", "Neoga", "New Athens", "New Baden", "New Berlin",
  "New Douglas", "New Lenox", "Newark", "Newton", "Niantic",
  "Niles", "Noble", "Nokomis", "Normal", "Norris City",
  "North Aurora", "North Chicago", "Northbrook", "O'Fallon", "Oak Brook",
  "Oak Forest", "Oak Lawn", "Oak Park", "Oakland", "Oakwood",
  "Oblong", "Odin", "Ogden", "Oglesby", "Ohio",
  "Okawville", "Olney", "Olympia Fields", "Onarga", "Oquawka",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < illinoisCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(illinoisCities[i]);
}

module.exports = { batches };
