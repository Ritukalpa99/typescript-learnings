let stringArr = ["one", "hey", "jinn"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

// stringArr[0] = 42 error
// stringArr.push(42) error
stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jinn");

// stringArr = guitars //error
guitars = stringArr;
mixedData = guitars;

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuples
let myTuple: [string, number, boolean] = ["Jinn", 42, true];

let mixed = ["John", 1, false];

// myTuple[0] = 9
myTuple[0] = "Mayer";

// Objects
let myObj: object;

myObj = [];
console.log(typeof myObj); //object
myObj = {};

const exampleObj = {
	prop1: "Jinn",
	prop2: true,
};

// exampleObj.prop2 = 42

type Guitarist = {
	name: string;
	active?: boolean;
	albums: (string | number)[];
};

let evh: Guitarist = {
	name: "Eddie",
	active: false,
	albums: [1984, 5150, "OU812"],
};
let jp: Guitarist = {
	name: "Jimmy",
	active: true,
	albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist : Guitarist) => {
  return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(jp));

// interface

interface Pianist {
	name: string;
	active?: boolean;
	albums: (string | number)[];
};

// Enums

enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.U); // 0
