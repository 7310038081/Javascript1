// const aman = [1,2,3,4,5];
// const vivek = [6,7,8,9,10];

// const v1 = aman.concat(vivek);
// console.log("use of concat method",v1);

// // there is an another way to add the arrays that is use of spread operator

// const s1 = [...aman,...vivek];
// console.log("use of spread operator",s1);

// const  arr1 = [1,2,3,4,5,[1,2],6,7,[8,[1,2,3]]];
// const f1 = arr1.flat(Infinity);   // spread out the whole subarrays in a single array
// console.log(f1); 

console.log(Array.isArray("aman")); // check whether it is an array or not
console.log(Array.from("aman"));   // convert the values into in an array

console.log(Array.from({name: "vivek"})); // important for interviews

let aman1 = "vivek";
let aman2 = "aman";
let aman3 = "shobhit";

console.log(Array.of(aman1,aman2,aman3));  // converts it to array


//concat
//spread operator
//flat
//Array.isArray;
//Array.from
//Array.of
