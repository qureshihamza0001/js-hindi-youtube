const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//         console.log(`acc: ${acc} and curravl: ${currval}`);
//         return acc + currval    
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
     {
        itemnName: "py course",
        price: 999
    },
    {
        itemnName: "mobile dev course",
        price: 5999
    },
    {
        itemnName: "data science course",
        price: 12999
    },
   
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(priceToPay);
