// //singleton
// // Object.create   constructor method

// //object literals

const mySym = Symbol("AMAN");
const aman  = {
    name : "vivek",
    [mySym]: "AMAN",
    "full" : "vivek singh jatt",
    email: "vs292713@gmail.com",
    college : "lpu",
    section: "k20uf",
    rollNO : 25,
}

// // to access the object 

// // console.log(aman.name);
// // // console.log(aman."full");

// // // // so we use the another method to access the object

// // // console.log(aman["full"]);
// // console.log(aman[mySym]);  // printing the symbol
// // console.log(typeof mySym);

// // aman.email = "singhaman5288@gmail.com"
// // Object.freeze(aman);  // it freezes the object after that we can't change the values 
// // console.log(aman);


aman.fun1 = function() {
    console.log("My name is Vivek");
}

aman.fun2 = function() {
    console.log(`My roll no is, ${this.rollNO}`);
}

console.log(aman.fun1());
console.log(aman.fun2());


// creation of an object
//to access the objects in two ways
//how to use Symbol
// how to freeze an object  Object.freeze(Object_name)
// how to use function with objects