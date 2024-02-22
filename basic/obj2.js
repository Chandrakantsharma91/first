//THIS IS FOR SINGLE TON

// const tinderUser = new Object() this is single ton obj
const tinderUser = {} //this is non single ton obj

 tinderUser.id = "123abc"
 tinderUser.name = "Chandrakant"
 tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regulalUser  = {
    email : "chandrakant@gmail.com",
    fullname :{
        firstname: "chandrakant",
        lastname : "Sharma"
    }
}
//console.log(regulalUser.fullname.firstname );

const obj1 = {1: "a" , 2 : "b"}
const obj2 = {3: "a" , 4: "b"}
//const obj3 = Object.assign({} ,obj1 , obj2) //(target , source)

const obj3 = {...obj1 , ...obj2}
//console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

