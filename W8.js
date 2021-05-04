// ["215", true, false, 2, 2.1, [], null]  -> [string]

// function arrayDataType(arr){
//     let newArray = [];
//     for(let i = 0; i < arr.length; i++) {
// newArray.push(typeof arr[i])
//     }
//     return newArray
// }

// function arrayDataType(arr){
//     return arr.map(x => typeof x)
// }

// const arrayDataType = arr => arr.map(x => typeof x)

// console.log(arrayDataType(["215", true, false, 2, 2.1, [], null]))

// [20, 15, 68, 80, 1] -> [1, 20, 15, 68,80]

// function moveArrByOne(arr){
// let lastIndexValue = arr.pop()
// arr.unshift(lastIndexValue)
// return arr
// }

// let moveArrByOne = arr => [arr.pop(), ...arr]

// console.log(moveArrByOne([20, 15, 68, 80, 1]))

// ["9", "4", "5", "8"]

// function nestedArrays(arr){
//     let newArr = [[], []]
//     for (let i = 0; i < arr.length; i++) {
//     if (parseInt(arr[i]) % 2 === 0) {
//         newArr[0].push(parseInt(arr[i]))
//     } else {
//         newArr[1].push(parseInt(arr[i]))

//     }
// }
// return newArr
// }

function nestedArrays(arr){
    let even = arr.map(Number).filter(x => x % 2 === 0);
    let odd = arr.map(Number).filter(x => x % 2 !== 0)
    return [even,odd]
}

console.log(nestedArrays(["9", "4", "5", "8"]))