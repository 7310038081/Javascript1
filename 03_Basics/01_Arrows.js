const user = {
    Username: "Vivek",
    section: "K20uf",

    WelcomeMessage :function() {
        console.log(`Hello ${this.Username} , your section is ${this.section}`);
        console.log(this);  // tells about the current context
    }
}

// user.WelcomeMessage();
// user.Username = "Aman";
// user.WelcomeMessage();

// console.log(this);

// const addtwo = (num1, num2) => {
//     return num1 + num2 ;            // explicit return arrow function
// } // synrax to write arrow function     


// const addtwo = (num1, num2) =>  num1 + num2  //  implicit return arrow function
const addtwo = (num1, num2) =>  (num1 + num2)    //  implicit return arrow function     

console.log(addtwo(3,4))