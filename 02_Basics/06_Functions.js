// function addTwoNumbers(number1 ,number2){  //parameters
//     return number1 + number2;
// }

// const result = addTwoNumbers(3,4);  //arguments
// console.log(result);


function UserLogin(username){
    return ` ${username}, just login`
}

console.log(UserLogin("Vivek"));

function sayDigit(digit){

    if(digit===undefined){
        console.log("please enter the digit");
    }
    else {
        return  `${++digit},"this is digit"`;
    }

}
console.log(sayDigit());
