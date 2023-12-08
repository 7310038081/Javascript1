let rollNo = "25"

console.log(typeof rollNo);
console.log(typeof (rollNo));

let value = Number(rollNo)

console.log(typeof value);
console.log(typeof (value));


/*
conversion
"25" => 25
"33abc" => NaN
true => 1
*/

let aman = 1

let change = Boolean(aman)
console.log(change)

let vivek = ""

let changes = Boolean(vivek)  // empty string gives false when we changes to boolean
console.log(changes)


let Name = "shobhit"
let Changes = Boolean(Name)  //non-empty string gives true when we changes to boolean
console.log(Changes)