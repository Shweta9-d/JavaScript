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

const output = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output);

/**;
 * Output : ['Shweta', 'Akshay']
 */
