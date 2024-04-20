"use strict";
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
let bands = [];
bands.push("Van Halen");
// Tuples
let myTuple = ["Jinn", 42, true];
let mixed = ["John", 1, false];
// myTuple[0] = 9
myTuple[0] = "Mayer";
// Objects
let myObj;
myObj = [];
console.log(typeof myObj); //object
myObj = {};
const exampleObj = {
    prop1: "Jinn",
    prop2: true,
};
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
;
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); // 0
