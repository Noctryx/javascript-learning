let hours = 10;
//if condition
if (hours < 12) {
  console.log("Good morning!");
}

let age = 17;
let license = false;
if (age >= 18) {
  license = true;
  if (license) {
    console.log("You are an adult.");
    console.log("You can drive.");
  }
} else {
  console.log("You are not an adult.");
  console.log("You cannot drive.");
}

//if-else condition
let hour = 14;
let greeting;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

//else-if condition
let time = 22;
let greetings;
if (time < 10) {
  greetings = "Good morning";
} else if (time < 18) {
  greetings = "Good day";
} else {
  greetings = "Good evening";
}
console.log(greetings);

//ternary operator
let Age = 20;
let text = Age >= 18 ? "You are an adult." : "You are not an adult.";
console.log(text);

//switch statement
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName);