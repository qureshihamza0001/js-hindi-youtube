// Primitive

// 7 types : String, Number, Boolean, null, undefinied, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')
    
    // console.log(id === anotherId);

    // const BigNumber = 32457634981371982879n

    // Reference (Non-Primitive)
    // Array, Objects, Functions

    const heros = ["shaktiman", "naagrsj", "doga"]
    // above is the example of array and arrays are written inside these brackets[]

    let myobj = {
        name: "hamza",
        age: 18,
    }
    // above is the example of functions and functions are written inside these brackets{}

    const myFunction = function(){
        console.log("Hello World");
    }

    // console.log(typeof anotherId);

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

    // Stack (Primitive), Heap (Non-Primitive)

    let myYoutubename ="hamzaqureshidotcom"
    let anothername =  myYoutubename
    anothername = "qureshi"

    console.log(myYoutubename);
    console.log(anothername);

    let userOne = {
        email: "user@google.com",
        upi: "userybl"
    }

    let userTwo = userOne

    userTwo.email = "hamza@google.com" 
    
    console.log(userOne.email);
    console.log(userTwo.email);


    
    
    

    