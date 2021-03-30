// Call stack

console.log('Hello!')

function greet() {
    return 'Hello from function '

}

const print = "My name"

console.log(greet())

let anotherVar = 5

// New Example -Works in Browser Console
// function firstFunction(){
//     throw new Error('Stack Trace Error');
//     }
//     function secondFunction(){
//     firstFunction();
//     }
//     function thirdFunction(){
//     secondFunction();
//     }
//     thirdFunction();


let num1 = 3
let num2 = 9

function add(x,y){

    //console.log( x + y)
    return(x + y)

}
console.log(add(num1,num2))

//Next

// const greetStudent = () => { console.log('Hello Hamish')}

// console.log(greetStudent())

function thirdFunction(){
    console.log("Third Function rules");
   }
   function fourthFunction(){
    thirdFunction();
    console.log("Whatever from Fourth");
   }
   function fifthFunction(){
    fourthFunction();
    console.log("Just here to party Fifth")
   }
   fifthFunction();