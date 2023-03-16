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

//display count of age
//acc = {24: 1, 46:2, 70:1}

const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);

/**
 * Output : {24: 1, 26: 1, 46: 2, 70: 1}
 */
