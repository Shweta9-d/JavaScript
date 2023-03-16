const users = [
  {
    firstName: "Shweta",
    lastname: "Dokhe",
    age: 24,
  },
  {
    firstName: "Akshay",
    lastname: "Saini",
    age: 26,
  },
  {
    firstName: "Donald",
    lastname: "Trump",
    age: 70,
  },
  {
    firstName: "Elon",
    lastname: "Musk",
    age: 46,
  },
  {
    firstName: "Deepika",
    lastname: "Padukone",
    age: 46,
  },
];

const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output);

/**
 * Output : ['Shweta', 'Akshay']
 */
