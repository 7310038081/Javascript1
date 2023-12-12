// // const gmailUser = new Object(); // singleton object
// const gmailUser = {} // non-singleton Object 
// console.log(gmailUser);

// gmailUser.name = "aman";
// gmailUser.id = 3;
// gmailUser.rollNo = 25;

// // console.log(gmailUser);


// const Obj = {
//     roll_N0 : 25,
//     name: {
//         fullname: {
//             firstname : "VIVEK",
//             lastname  : "SINGH"
//         }
//     }

// }

// console.log(Obj.name.fullname.lastname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}  // how to combine objects

// // const obj3 = Object.assign({}/* target */ , obj1,obj2 /*source*/)
// // console.log(obj3);   1st method 


// const obj3 = {...obj1,...obj2};
// console.log(obj3)    //2nd method use of spread opertor

const  myObj1 = {
    name: "Vivek",
    rollNo: 25,
    section: "k20uf"
}

console.log(myObj1);
console.log(Object.keys(myObj1));  // to access the objects keys only
console.log(Object.values(myObj1));   // to access the objects values only


console.log(Object.entries(myObj1)); // to make the arrays inside the object
console.log(myObj1.hasOwnProperty('name'));
console.log(myObj1.hasOwnProperty('name1')); // to check whether the property of an object is present or not

//singleton or non-singleton objects
//how to access nested objects (use of dot opertor)
//how to combine objects(1.use of spred opertor, 2.use of oject.assign({},target,source))
// to access the objects keys only
// to access the objects values only
//to make the arrays inside the object (use of Object.entries(obj_name))
// to check whether the property of an object is present or not (objectname.hasOwnProperty(property))
