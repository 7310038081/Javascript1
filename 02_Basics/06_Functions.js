// // function addTwoNumbers(number1 ,number2){  //parameters
// //     return number1 + number2;
// // }

// // const result = addTwoNumbers(3,4);  //arguments
// // console.log(result);


// function UserLogin(username){
//     return ` ${username}, just login`
// }

// console.log(UserLogin("Vivek"));

// function sayDigit(digit){

//     if(digit===undefined){
//         console.log("please enter the digit");
//     }
//     else {
//         return  `${++digit},"this is digit"`;
//     }

// }
// console.log(sayDigit());



// use of rest operator

function calculatePrice(...digit){
        return digit;
}

console.log(calculatePrice(500,600,700,800,900,10000));


// const user = {
//     username : "Vivek",
//     price : 300,
// }

function Acc(anyObject){
    console.log(`name is ${anyObject.username}, price is ${anyObject.price}`);
}

Acc({
    username:"Vivek",
    price:300
});


const Array1 = [100,200,300,400];

function getSecond(amray){
    return amray[1]
}

console.log(getSecond(Array1));