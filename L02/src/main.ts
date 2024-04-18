let myName = "Jinn"; //implicit
let myfullName: string = "Jinn Moir"; //explicit

let val: string;
val = "Some String value";
val = "Reassigning another value";

let meaningOfLife : number;
let isLoading: boolean;
let album: any; // allows any type of value

meaningOfLife = 42;
isLoading = true;
album = 'Meteora';
album = 12;

const sum = (a : number,b : string) => {
  return a+b;
}

let unionType : string | number; // will allow either string or number type
unionType = "a";
unionType = 12;
// unionType = true; error

let postId: string | number;
let isActive : number | boolean | string;

let re:RegExp = /\w+/g // infers regex type