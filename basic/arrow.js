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

console.log(addTwo(3,5));

