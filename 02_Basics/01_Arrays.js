// const myArr = [1,2,3,4,5,6,7];
// // console.log(myArr);

// // myArr.push(8);
// // console.log(myArr);

// // myArr.pop();
// // console.log(myArr);

// // myArr.unshift(9);
// // console.log(myArr);

// // myArr.shift();
// // console.log(myArr);

// // console.log(myArr.includes(5));   // used for checking whether the element is present or not
// // console.log(myArr.indexOf(4));

// const newArray = myArr.join();  // join all the elements and converts the datatype of array into string
// console.log(newArray);

// console.log(typeof newArray);

// differnence btw splice and slice 

const Arr1 = [0,1,2,3,4,5];
console.log("A", Arr1);

const Arr2 = Arr1.slice(1,3);
console.log("B", Arr1);
console.log("Slice", Arr2);



const Arr3 = Arr1.splice(1,3);
console.log("C", Arr1);
console.log("Splice", Arr3);   // it removes the slice part value or it removes the range value;