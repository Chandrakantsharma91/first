//functions

// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log('S');
// console.log('H');

function sayMyname(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log('S');
    console.log('H');
    
}

//sayMyname()

function addTwo(number1 , number2){  //defination is called parameter as like number1 , number2
        //   let result = number1+number2
        //   return result
        return number1 + number2
}
const result = addTwo(2,3)

//console.log("Result: " , result);


//addTwo(2,4) // values is called argument

function loginUserMessage(username = "someone"){
    if(!username){
     console.log(" please enter a username");
     return
    }
    return `${username} just loggedin`
}

//console.log(loginUserMessage("Chandrakant"));
//when the value is not given anything so it print someone is looged in 
//and if given then it overwrite


const user = {
    username : "chandrakant",
    price : 199,
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const mynewArray = [200, 400 , 5000]

function returnsecondvalue(getArray){
    return getArray[1] 
}

console.log(returnsecondvalue(mynewArray));