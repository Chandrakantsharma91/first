//singleton
//when we decleare in litrales the it doesnot make single ton

//THIS IS FOR  LITERALS
//Object.create

const mySym = Symbol("key1") //it is imp for interview perpose

const jsUser ={
    name :"Chandraknt",
    "full name" : "Chandrakant Sharma",
    [mySym]: "myKey1",
    age : 19,
    location : "Faridabad",
    email : "chandrakant91@gmail.com",
    isLoggedIn : false,
    lastLoggedIn :["Monday" , "Saturday"]
}

// console.log(jsUser.email);  //Three ways to take obj 
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log( jsUser[mySym]);

jsUser.email ="komal@gnail.com"
//Object.freeze(jsUser)
jsUser.email = "komal@js"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}


jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name} `);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());