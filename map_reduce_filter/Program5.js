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
    age: 52,
  },
  {
    firstName: "Deepika",
    lastname: "Padukone",
    age: 46,
  },
];

// display list of full name : ["Shweta Dokhe", "Akshay Saini",...]

const output = users.map((x) => x.firstName + " " + x.lastname);
console.log(output);

/**
 * 0
: 
"Shweta Dokhe"
1
: 
"Akshay Saini"
2
: 
"Donald Trump"
3
: 
"Elon Musk"
4
: 
"Deepika Padukone"
 */
