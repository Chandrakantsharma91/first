const user = {
    username : "chandrakant",
    price : 199,

    welcomemessage : function(){
      console.log(`${this.username} , welcom to website`);
    }
}

// user.welcomemessage()
// user.username  = "sam"
// user.welcomemessage()


// console.log(this);

// function chai(){
    // let userName = "chandrakant"
//     console.log(this.userName);
// }

const chai = () =>{
    let userName = "chandrakant"
    console.log(this);
}

//chai()

// const addTwo =(num1 , num2) =>{
//        return num1 + num2
// }

//   Implicit
//const addTwo =(num1 , num2) => num1 + num2

// const addTwo =(num1 , num2) => (num1 + num2)

// const addTwo =(num1 , num2) => ({userName : "chandra"})

//console.log(addTwo(3,5));

   // Concept of IFFI  which is imidetly invoced function

(function chai(){
    console.log(`DB CONNECTED`);
})();  //here terminator is used because it don,t know where to end

//()()  global scope ke pollution ko htane ke liye iffi ka use krte h

( function code(){
    // It is called named iffi
    console.log(`DB 2 CONNECTED`);
}) ();

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')

 



