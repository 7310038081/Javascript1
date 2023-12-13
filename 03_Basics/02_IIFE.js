// Immediately Invoked Function Expressions
// to removes the pollution caused by global scope we have to use IIFE



( function aman() {
    console.log("vivek");
})();

(function vivek() {    // named IIFE
    console.log("aman");  
})();

( () => {        // simple IIFE
    console.log("hihi")    // syntax of arrow function ( () => {}) ();
})();

( (name) => {
    console.log(`arrow function with IIFE with parameters, ${name}`)
}) ('aman')