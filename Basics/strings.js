const str = "Hello World";
console.log(str.length); //length of the string
console.log(str.toUpperCase()); //convert the string to uppercase
console.log(str.toLowerCase()); //convert the string to lowercase
console.log(str.includes("Hello")); //check if the string includes the word "Hello"
console.log(str.startsWith("Hello")); //check if the string starts with the word "Hello"
console.log(str.endsWith("World")); //check if the string ends with the word "World"
console.log(str.indexOf("World")); //find the index of the word "World"
console.log(str.lastIndexOf("World")); //find the last index of the word "World"
console.log(str.slice(0, 5)); //slice the string from index 0 to 5
console.log(str.substring(0, 5)); //substring the string from index 0 to 5
console.log(str.replace("World", "JavaScript")); //replace the word "World" with the word "JavaScript"
console.log(str.concat(" Welcome to the world of JavaScript")); //concat the string with the word "Welcome to the world of JavaScript"
console.log(str.trim()); //trim the string
console.log(str.split(" ")); //split the string into an array of words
console.log(str.charAt(0)); //get the character at index 0
console.log(str.charCodeAt(0)); //get the character code at index 0
console.log(str.codePointAt(0)); //get the code point at index 0