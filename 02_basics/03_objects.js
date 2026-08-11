// singleton
// Object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "hamza",
    "full name": "Qureshi Hamza",
    [mySym]: "mykey1",
    age: 18,
    location: "Mumbai",
    email: "hamza@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] 
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

