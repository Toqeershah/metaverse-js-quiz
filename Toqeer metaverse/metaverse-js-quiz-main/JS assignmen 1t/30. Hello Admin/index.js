const uesrNames = ["Robert", "Usman", "Arslan", "admin", "Farhan"];

for (const uesrName of uesrNames) {
    if (uesrName === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${uesrName}, thank you for logging in again.`)
    }
}