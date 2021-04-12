//TODO
//Given two arugs reurn an array whoch contains these arugs

// Lesson 07.04.21

// funcTwo Arugs(1,2) = [1,2]

// function twoArugs(a, b) {
//     let arr = [a, b]
//     return arr
// }

// console.log(twoArugs(1, 2))


// Refactor
// const twoArugs = (a, b) => [a, b] 

//Spread Operator
// const twoArugs = (... a) => a

/////////////////////////////////////////////////////////////////////////////////

//TODO 
//Explain Spread Operator
//Spreads over an object to get all its properties, then overwrites said properties with the ones that we are parsing
//"Think of this spread thing as extracting all the individual properties one by one and transferring them to the new object."

/////////////////////////////////////////////////////////////////////////////////

// function oddOrEven(arr){

//     let count = 0
//     arr.forEach(x => count += x)
//     return count%2 === 0 ? "even" : "odd"
// }

// const newArr = [1, 2, 3, 4, 5, 6, 7]
// console.log(oddOrEven(newArr))

// function oddOrEven(arr) {
// let count = 0
// for(let i = 0; i < arr.length; i++){
//     count+= arr[i]
// }
// if(count % 2 === 0){
//     return "even"
// } else {
//     return "odd"
// }
// }

//TODO 
//Explain Reduce 
// const oddOrEven = (arr) => arr.reduce((a, b) => a + b, 0)% 2 === 0? "Even" : "Odd";
// console.log(oddOrEven([1, 2, 3, 4]))

///////////////////////////////////////////////////////////////////////////////////////

//arr["3", "5.8"]

// function NumberDt(arr){
//     newArr = []
//     arr.forEach((x) => {
//         newArr.Push(Number(x))
//     })
//     return newArr
// }

// const NumberDt = (arr) => arr.map((x) => Number(x)) //Converts String into Number

// console.log(NumberDt(['3', '5.6']))

// function arrToString(arr){

//     let str = ''
//     for (let i = 0; i < arr.length; i++){
//         str += arr[i]
//     }
//     return str
//}


// function arrToString(arr) {
//     return arr.join('');
// }

// const arrToString = (arr) => arr.join('');
// console.log(arrToString([1, 2, 3, 4, 5]))

// Object to Array

// function objToArray(obj){
//     let arr = [];
//     for (let i in obj){
//         arr.push([i,obj[i]]);
//     }
//     return arr
// }

// const objToArray = obj => Object.entries(obj)

// console.log(objToArray({me: "Hamish", you: "Matt", thing: "Date Night"}))

// function reverses(str){
//     let arr = str.split('')
//     let revArr = arr.reverse()
//     let joinArr = revArr.join('')

//     return joinArr
// }

const revStr = (str) => str.length < 2 ? str : revStr(str.slice(1, str.length)) +str[0]

console.log(revStr("ttaM og ay erehT"))