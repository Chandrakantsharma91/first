 
//if

//const isUserloggedIn = true
//const temperature = 41

// if (temperature < 50) {
//     console.log("less then 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

//  < , > , <= , >= , == , != , === is for datatype cheking

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }


//const balance = 1000

// Implicit way

//if (balance > 500) console.log("test");


const isUserloggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail =true
const Guestuser = true

if (isUserloggedIn && debitcard) {
    console.log("allow to purchase the couse");
}

if (loggedInFromGoogle ||loggedInFromEmail || Guestuser) {
     console.log("User loggeg in");
}