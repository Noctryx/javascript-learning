//there are 8 data types in Javascript
//1. String
let name = "Venky";
//2. Number
let age = 20;
//3. Boolean
let isStudent = true;
//4. Null
let address = null;
//5. Undefined
let phoneNumber;
//6. Symbol
let uniqueId = Symbol("id");
//7. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
//8. Object
let person = {
  name: "Venky",
  age: 20,
  isStudent: true,
};
console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isStudent); //boolean
console.log(typeof address); //object (null is considered an object in JavaScript)
console.log(typeof phoneNumber); //undefined
console.log(typeof uniqueId); //symbol
console.log(typeof bigNumber); //bigint
console.log(typeof person); //object   