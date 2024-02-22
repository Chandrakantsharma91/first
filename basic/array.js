
// const myArr = [0,1,2,3,4,5]

// const myHeros = ['shaktiman' , 'nagraj']

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0])
//console.log(myHeros[3]);


//  Array Methods

// myArr.push(6 , 7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

//myArr.unshift(8) //given number is added first or in start
// myArr.shift()
// 

//console.log(myArr.includes(5)); //it give boolean value
 //const newArr = myArr.join() // it convert in the string

// console.log(myArr);
// console.log(newArr)


//  SLICE OR SPLICE

// console.log("A" , myArr);

// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)// when splice is used it manipulate the original array
// console.log(myn2);
// console.log("C", myArr);

// spread methode or concatinate both add two strings
//flat is also a method which make all the array in a single array

console.log(Array.isArray("chandrakant"));
console.log(Array.from("chandrakant")); //form wiil convert in the array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));