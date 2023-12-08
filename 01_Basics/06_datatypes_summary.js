/*
 #DATATYPE TYPES
 1.Primitive datatypes (they are call by value (copy))
 //types : String,number,boolean,bigint,symbol,null,undefined


 2.Reference Type (Non-Primitive)  (as a reference)
 //types: array, object,functions(object-function)  //type of datatype function
*/ 



let Name = "aman"
console.log(typeof Name) // returns string type datatype

let Number = 123;
console.log(typeof Number); // returns number type datatype

let boole = true;
console.log(typeof boole); //returns the boolean datatype
//arrays  :

let name = ["vivek","aman","singh"]
console.log(typeof name); // return the object datatype

let big = 1234382638263
console.log(typeof big);

const sym = Symbol('123')
console.log(typeof sym)

//objects:

let obj= {

    name: "vivek",
    age: 22,          //key:value pairs

}
console.log(typeof obj);  //return the object datatype

//functions:

let myFunction = function() {

    console.log("Hello World!");
}

console.log(typeof myFunction);

//returns the function datatype