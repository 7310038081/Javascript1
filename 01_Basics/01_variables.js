const accountId = 12245
let accountEmail = "vs292713@gmail.com"
var accountPassword = "558877"

City = "Uttar Pradesh"
let accountState;  // not assigning any value 

// accountId = 1222  // not changeable becoz of const keyword

accountEmail = "singhaman5288@gmail.com"
accountPassword = 123456678
City = " Punjab"
 

/*
prefer not to use var becoz of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, City,accountState])