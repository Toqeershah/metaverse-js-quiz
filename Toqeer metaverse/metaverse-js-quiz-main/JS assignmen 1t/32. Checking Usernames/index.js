const current_users = ["Rutherford", "Asif", "Farhan", "admin", "Manuel"];
const new_users = ["max", "Usman", "John", "Hamza", "Asif"];

for (const name of new_users) {
    const regExp = new RegExp(name, 'i');
    const isDuplicate = current_users.find(curr_user => regExp.test(curr_user));
    if(isDuplicate){
        console.log(name + " will need to enter a new username.")
    }else {
        console.log("The username " + name + " is available.")
    }
}