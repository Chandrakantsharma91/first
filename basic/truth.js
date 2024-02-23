  // falsy value
  /*
  false , 0 , -0 , BigInt 0n , "" , undefined , NaN
  */

  // Truthy Values
  /*
   "0" , "false" , " " , [] , {} , function(){}
  */

   const isUserloggedIn = []
   const emptyObj = {}

   if (Object.keys(emptyObj).length === 0) {
    //console.log("Object is empty");
   }

   if (isUserloggedIn.length === 0) {
    //console.log("Array is empty");
   }

   // Nullish coalescing operator(??) : null undefined
   
   let val1;
   val1 =5 ?? 10
   val1= null ?? 10
   val1 = undefined ?? 5
   val1 = null ??10 ?? 5

   console.log(val1);

   // Terniary operator
   // condition ? true : false