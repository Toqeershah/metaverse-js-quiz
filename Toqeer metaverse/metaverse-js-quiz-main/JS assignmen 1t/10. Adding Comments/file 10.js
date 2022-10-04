const male1 = "Hafiz Toqeer Shah";

// ## A function returns function with greeting and message set and function takes a name parameter

function greet(greeting, message){
    return function(name){
        console.log(`${greeting} ${name}, ${message}`);
    }
}

const greetAsk = greet("Hello", "would you like to learn some Python today?");
greetAsk(person);



const male2 = " \t Hafiz Toqeer Shah \n ";
console.log(person)
/*
  ## Trimed whitespaces using trim method
*/
console.log(male2.trim())