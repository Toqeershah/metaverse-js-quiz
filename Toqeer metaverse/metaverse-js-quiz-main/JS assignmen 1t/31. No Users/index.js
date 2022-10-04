const uesrNames = ["Rutherford", "Asif", "Usman", "admin", "Manuel"];

for (const uesrName of uesrNames) {
    if (uesrName === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${uesrName}, thank you for logging in again.`)
    }
}

uesrNames.splice(0, uesrNames.length)
if(!uesrNames.length){
    console.log("We need to find some users!")
}