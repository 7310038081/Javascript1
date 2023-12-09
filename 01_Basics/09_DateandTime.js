let date = new Date();
// console.log(date);
// console.log(date.toDateString()); // Sat Dec 09 2023
// console.log(date.toISOString()); //2023-12-09T07:53:16.578Z
// console.log(date.toJSON()); //2023-12-09T07:54:06.297Z
// console.log(date.toLocaleDateString()); //12/9/2023
// console.log(date.toLocaleString());  //12/9/2023, 7:55:25 AM
// console.log(date.toString()); //Sat Dec 09 2023 07:55:57 GMT+0000 (Coordinated Universal Time)

console.log(typeof date); //object

let createDate = new Date(2023,2,4);
console.log(createDate.toLocaleDateString());

let cre = new Date(2023, 0, 23, 5, 4);
console.log(cre.toLocaleString());


// ++ to ++ be ++ continued -- ++ //