// Create a function that concatenates n input arrays, where n is variable
//concat([1, 2, 3], [4, 5],)


//First Solution

// function firstFunc (...args) { //args. allows us to process any argument

// let result = []; // Result is displayed as an array so we need an empty array to store the result
// for (let i = 0; (i < arguments.length); i++) { // Arguments.length allows us to input any sized array // i++ means incrimenting each loop
//     result = result.concat(arguments[i])} //.concat concatenates for us
// return result //result returned
// }

// console.log(firstFunc([1, 2, 3],[4, 5], [6, 7]))

//ES6

// function esSixFunc(...args) {
//     return [].concat(...args)
// }

// console.log(firstFunc([1, 2, 3],[4, 5], [6, 7]))

//create a function that takes two numbers as arguments (num, length)

// function secFunc(num, length){ //Declaring function
// let result = []; // empty array for result
// for (let i = 1; i <= length; i++){ // incrimenting by 1
//     result.push(num*1) //pushing result to array
// } //looping until i is greater than length
// return result
// }

// console.log(secFunc(7,5))

// //ES6

// function esSixSecFunc(num, length){
//     return [...Array(length).keys()].map((e, i) => (e+1)*num)
// }
// console.log(esSixSecFunc(7,5))

//Create function that takes an array of numbers arr, 
//a string str and return an array of numbers as per the following rules;
//

// function ascDecFunc(arr, Str) {
//     switch (Str){
//         case 'Asc':
//         return arr.sort((a, b) => a - b)
//         break
//         case 'Des':
//         return arr.sort((a, b) => b - a)
//         break
//         return arr
//     }
// }
// function ascDecFunc(){
//     let result = []
//     for (let i = 1; i <= String.length; i++){
//         result.sort();
//     }


// }

// console.log(ascDecFunc(1, 2, 3, 4, 5, 6, 7))

//Create function that returns true if all parameters are true, and false otherwise

//const checkTrueOrFalse = (...args) =>args.every(Boolean) // checks all arguments, if all are true return true, if not, return false

//Function that takes 3 arguments (x, y, z) and returns matrix [[3, 3], [4, 4],[7, 7]]

// function subArrays(x, y, z){
//     return Array(x).fill(Array(y).fill(z))
// }

// console.log(subArrays(3, 5, 15))

//Create a function that takes an Array of names, returns an Array with only first letter of names capitalized
// function capitalizor(arr) {
//     for (let i = 0; i < Array.length; i++){
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().substring(1)
//     }
// return arr
// }
// console.log(capitalizor(bye, cry, Fly, WHY))

//("AAABBCDDAAAAABCCC") -> ["A", "B", "C", "D", "E"]
//([1, 2, 3, 4, 4]) -> [1, 2, 3, 4]

function removeFunc(x){ // Declare function
    return Array.from(x).filter((e, i, a) => e !== a(i-1))// filters through array, if not equal to previous then push
}

let esFiveFunc = function(x){
    let newArray = []; //Generates a new array for us to work with
    
    for (let i = 0; i < x.length; i++){ // for loop that loops while i is less than the length of x, increasing by 1 each time
        if (x[i] !== x[i+1]) {// compares the property of x and filters out numbers that are not equal to the previous number used (if x does not equal x + 1 then it will add the new number to the array)
            newArray.push(x[i]) // pushes new number to array
        }
    }

}