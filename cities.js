const illinoisCities = [
  "Justice", "Kankakee", "Kansas", "Karnak", "Kenilworth",
  "Kewanee", "Kingston", "Kinmundy", "Knoxville", "La Grange",
  "La Grange Park", "La Harpe", "La Salle", "Lake Bluff", "Lake Forest",
  "Lake In The Hills", "Lake Villa", "Lake Zurich", "Lanark", "Lansing",
  "Latham", "Lawrenceville", "Le Roy", "Lebanon", "Leland",
  "Lemont", "Lena", "Lenzburg", "Lerna", "Lexington",
  "Liberty", "Libertyville", "Lincoln", "Lincolnshire", "Lincolnwood",
  "Lindenwood", "Lisle", "Litchfield", "Little York", "Loami",
  "Lockport", "Loda", "Lombard", "Louisville", "Loves Park",
  "Lovington", "Lowpoint", "Lyons", "Macedonia", "Machesney Park",
  "Mackinaw", "Macomb", "Macon", "Mahomet", "Makanda",
  "Malta", "Manhattan", "Manito", "Manteno", "Maple Park",
  "Mapleton", "Marengo", "Marion", "Markham", "Maroa",
  "Marseilles", "Marshall", "Martinsville", "Maryville", "Mascoutah",
  "Mason", "Mason City", "Matteson", "Mattoon", "Maywood",
  "Mchenry", "Mclean", "Mcleansboro", "Mcnabb", "Mechanicsburg",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < illinoisCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(illinoisCities[i]);
}

module.exports = { batches };
