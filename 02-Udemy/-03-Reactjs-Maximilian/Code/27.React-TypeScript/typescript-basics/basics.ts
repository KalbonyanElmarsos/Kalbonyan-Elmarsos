// Primitives data types
// 1) String
let userName: string;
userName = "ali";

// 2) number
let num: number;
num = 2;

// Type aliases
type Human = { name: string; age: number };

//  3) boolean
let bool: boolean;
bool = true;

// Arrays, functions and Objects

let arrayOfStrings: string[];

arrayOfStrings = ["ali", "hend"];
// arrayOfStrings= ['ali', 2] // type 'number' is not assignable to type 'string'

let object: Human;
// let object: { name: string; age: number };

object = { name: "ali", age: 2 };

let arrayOfObject: Human[];
// let arrayOfObject: { name: string; age: number }[];

arrayOfObject = [{ name: "ali", age: 2 }];
// arrayOfObject = [{ name: "ali", age: 2 }];

// Type inference (typescript smart enough to detect the type implicitly)
let course = "Reactjs max";

// course=1132 //Type 'number' is not assignable to type 'string'

// Union-types
let course2: string | number = "Reactjs max"; // this feature allowing you to declare variable with multiple type
course2 = 1132;

//  Functions

// this function implicitly  (inference) return a number
function subtract(a: number, b: number) {
  return a - b;
}
// this function (void) means it will not return any value
function print() {
  console.log("hello");
}

//  Generics

function insertToArr<T>(arr: T[], value: T) {
  // function insertToArr(arr: any[], value: any) {
  const newArr = [value, ...arr];
  return newArr;
}

const dummyArr = [1, 2, 3];
const updatedArr = insertToArr(dummyArr, 1);
console.log(updatedArr); // [1,1,2,3,]

const dummyArr2 = ["a", "b"];
const updatedArr2 = insertToArr(dummyArr2, "3");
console.log(updatedArr2); // ['3','a','b']
