const person = "Toqeer Shah";


console.log("Hello " + person.toLowerCase() + " would you like to learn some Python today?");
console.log("Hello " + person.toUpperCase() + " would you like to learn some Python today?");
const titleCaseName = person.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
console.log("Hello " + titleCaseName + " would you like to learn some Python today?");