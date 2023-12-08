const name = "Vivek"
const repo = 10

// console.log(`Hello my name is ${name} my repo count is ${repo}`)

const game = new String("Vivek-singh-aman") //constructor String()


// console.log(game[0]);
// console.log(game[1]);

//methods of strings
// console.log(game.__proto__); // through this we access the prototype {}
// console.log(game.length);  // length of string
// console.log(game.toUpperCase());  // convert lower to upper name
// console.log(game.charAt(4)); // finds the character at given position
// console.log(game.indexOf('k'));

//string slicing 
//divide string into sub-string

const newString = game.substring(0,4);
console.log(newString);            //substring can't obeys negative value in them 

const anotherString = game.slice(-4,4);
console.log(anotherString); // in slicing we can give -ve values also


const StringOne = "  AMAN  ";
console.log(StringOne);
console.log(StringOne.trim());  // through trim() method we can remove the extra spaces

const url = "https://viveksingh@20.com";
console.log(url.replace('20','gmail'));  // used for replacing


console.log(game.includes('Vivek'));
console.log(game.includes('aman'));  //it tells whether the string is present on that variable or not

console.log(game.split('-'));   // it converts the string into array 
                                //through split() method we can seperate the spring using seperator


const Naming = "Vivek Singh";
const Repos = 11;

console.log(`My name is ${Naming} my repos are ${Repos}`);  // use always this sytax for concatenation