//for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("a gap between loops");
const cars = ["Toyota", "Honda", "Ford"];
let length = cars.length;
let text = "";
for (let i = 0; i < length; i++) {
  text += cars[i] + " ";
}
console.log(text);

console.log("a gap between loops");
//while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

console.log("a gap between loops");
//do-while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

console.log("a gap between loops");
//break statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log("a gap between loops");
//continue statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
