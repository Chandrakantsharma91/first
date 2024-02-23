 const myNums = [1,2,3]

 const myTotal = myNums.reduce(function(acc , currval){
    //console.log(`acc: ${acc} and currval : ${currval}`);
     return acc + currval 
}, 0)

//console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js coourse",
        Price : 299,
    },

    {
        itemName : "py coourse",
        Price : 499,
    },
    {
        itemName : "mobile devlopment coourse",
        Price : 999,
    },

    {
        itemName : "Data science coourse",
        Price : 1299,
    }
]

 const pricetopay = shoppingCart.reduce((acc , item) =>acc + item.Price , 0)

 console.log(pricetopay);