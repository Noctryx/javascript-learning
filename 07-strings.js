//string
let name = "John";
let message = "Hello, " + name + "!";  
console.log(message); // Hello, John!
//strings with single quotes
let greeting = 'Hi, ' + name + '!';  
console.log(greeting);
//template literals with variable interpolation
let templateMessage = `Welcome, ${name}!`;  
console.log(templateMessage);
//multiple lines
let multiLineString = `This is a string
that spans multiple
lines.`;
console.log(multiLineString);
//string methods that are most widely used
let str = "Hello, World!";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("World"));
console.log(str.indexOf("o"));
console.log(str.slice(0, 5));
console.log(str.replace("World", "JavaScript"));  
console.log(str.charAt(0)  );