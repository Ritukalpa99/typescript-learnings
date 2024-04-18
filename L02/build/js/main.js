"use strict";
let myName = "Jinn"; //implicit
let myfullName = "Jinn Moir"; //explicit
let val;
val = "Some String value";
val = "Reassigning another value";
let meaningOfLife;
let isLoading;
let album; // allows any type of value
meaningOfLife = 42;
isLoading = true;
album = 'Meteora';
album = 12;
const sum = (a, b) => {
    return a + b;
};
let unionType; // will allow either string or number type
unionType = "a";
unionType = 12;
// unionType = true; error
let postId;
let isActive;
let re = /\w+/g; // infers regex type
