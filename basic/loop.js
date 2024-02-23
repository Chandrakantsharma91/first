//for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 1; i <=10; i++) {
//     console.log(`Outer loop value ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(i + '*' + j + '=' + i*j);
        
//     }
    
    
// }

let myArray = ["flash" , "batman" , "superman"]
//console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
    
}

// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        //console.log(`DETECTED 5`);
        continue // one time exicute hota h
    }
    //console.log(`value of i is ${i}`);
    
}



//    For of
const arr = ['s' , 'h' , 'a']

for (const string of arr) {
    //console.log(string);
}

const greetings = "Hello World"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
}



 //          Map  it is also a object and for unique values

 const map = new Map()

 map.set('IN' , "India")
 map.set('USA' , "United SStates of America")
 map.set('FR' , "France")
 //console.log(map)

 for (const [key , value] of map) {
    //console.log(key , ":" , value);
    
 }

 const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby'
 }

 for (const key  in myObject) {
    
        //console.log(myObject[key ]);
    }
 // forin loop is for keys only and forof is for key and value both 


//  foreach

const coding = ["js" ,"ruby" , "java" , "python"]
// coding.forEach(function (value) {
//     console.log(value);
// })

coding.forEach((item , index , arr) =>{
    // console.log(item , index , arr);
})

coding.forEach((item) =>{
    //console.log(item);
})


//for taking the values in an object

const myCoding = [
    {
        languageName :"javascript",
        languageFile :"js",
    },

    {
        languageName :"Ruby",
        languageFile :"rb"
    },

    {
        languageName :"c++",
        languageFile :"cpp"
    },

    {
        languageName :"swift",
        languageFile :"sf"
    }
]

myCoding.forEach((item) =>{
    //console.log(item.languageName);
})

//const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);
// if we use scope the we have to use return
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => {
    return num > 4
})
//console.log(newNums);

