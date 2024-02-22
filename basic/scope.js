 //{} is called scope

//  let a = 10

//  if (true) {
//     let a = 300
//     const b = 20
//     console.log("Inner: ", a);
    
//  }

//  console.log(a);


/* 
         Nested SCOPE
*/

function one(){
    const userName = "Chandrakant"

    //function two()
    {
        const website = "youtube"
        // console.log(userName);
    }
    //console.log(website);

    two()
}

one()



//              IMPORTANT

console.log(addone(5));

function addone(num){
    return num+1
}

addTwo(5)
const addTwo = function(num){
    return num +2
}