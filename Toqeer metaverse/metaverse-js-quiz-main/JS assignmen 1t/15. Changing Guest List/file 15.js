const peopleInvited = ["Usman", "Farhan", "Asif"];

peopleInvited.forEach(people => {
    console.log(people);
});

console.log(peopleInvited[2] + " can't make it.");


peopleInvited[2] = "Junaid";

peopleInvited.forEach(people => {
    console.log(people);
});