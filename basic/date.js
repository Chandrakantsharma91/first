let MyDate = new Date()
// console.log(MyDate.toString());

// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleString());
// console.log(typeof MyDate);

// let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = Date.now()
//console.log(myCreatedDate);// this will come in mili seconds
//console.log(Math.floor(Date.now()/1000));

let NewDate = new Date()
console.log(NewDate.getMonth())
NewDate.toLocaleString('default' ,{
    weekday:"long",
    
})

let Name = 'chandrakant'
let age = 19

//way of writing the string in modern way
console.log(`my name is ${Name} and my age is ${age}`);