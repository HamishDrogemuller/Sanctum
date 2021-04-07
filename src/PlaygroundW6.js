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

//Stack Overflow

// function callMyself(){
//     callMyself();
//   }
//   callMyself();

// Memory - https://hellodeveloper2020.gitbook.io/sdv503/js-call-stack/untitled

//Create a unique identifier for your variable (“myNumber”).
// Allocate an address in memory (will be assigned at runtime).
// Store a value at the address allocated (23).

let myNumber = 23

const numbers = []
numbers.push(1)
numbers.push(2)
numbers.push(3)
numbers.push(4)
numbers.push(5)
numbers.pop()
numbers.pop()

console.log(numbers)

const arr = [];

arr.push('I')
arr.push('II')

console.log(arr)
arr.push('III')

console.log(arr)


myArray = ['a']
console.log(myArray)

//Functions

let bottle = "Green Bottle"
let cap = "White Cap"

let num5 = 3
let num6 = 4

function bottleCapper(x,y){
    return (x + y);
}

console.log(bottleCapper(bottle,cap))
console.log(add(num5,num6))

console.log(bottleCapper("5 ",5))
console.log(bottleCapper(null,undefined))
console.log(bottleCapper({}));
console.log(bottleCapper([]));
console.log(bottleCapper(bottleCapper("green bottle ", "white lid ")))

let numI = 5
let numII = 8
let numIII = 9
let numIV = 11

function III(w,x,y,z){
    return (w + x + y + z)
}

console.log(III(numI,numII,numIII,numIV))
