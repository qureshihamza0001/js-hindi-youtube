const accountId = 144553
let accountEmail = "hamza@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 not allowed

accountEmail = "hchc.com"
accountPassword = "12121212"
accountCity = "Bengaluru"

console.log(accountId);

/*
 prefer not to use var
 because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])