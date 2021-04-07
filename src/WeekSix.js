// .length, .split(), .join(), prototype
 
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
 
//break
 
const student = {
    name: 'Bob',
    year: 'one',
    class: 'SDV'
}
console.log(student.name)
student.name = 'Matt'
console.log(student)
 
//break
 
const newObj = {}
 
const info = {
    firstName: 'John',
    lastName: 'Smith',
    dateOfBirth: '1st December 2000',
    friends: ['Bob', 'Tom']
}
console.log(info.friends[1]) //Tom
 
//break
 
const example = {
    nestedObj: {
        name: 'Alex'
    }
}
console.log(example)
 
//or
 
const anotherObj = new Object()
console.log(anotherObj) 
 
//break
 
const propsName = 'firstName'
const objOne = {
    [propsName.toUpperCase()]: 'Alexander'
}
 
console.log(objOne)
 
//break
 
const objTwo = {
    firstName: 'Ali',
    lastName: 'James',
    printFullName() { 
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(objTwo)
//dot notation
console.log(objTwo.printFullName()) 
//or bracket notation
console.log(objTwo['firstName'])
console.log(objTwo['firstName', 'lastName'])
console.log(objTwo.hasOwnProperty('lastName')) //true
console.log(objTwo.hasOwnProperty('address')) //false
 
//break
 
console.log(delete objTwo.firstName) //true
console.log(objTwo.hasOwnProperty('firstName')) //false
const newProps = delete objTwo.firstName
console.log(newProps) //true

//Class 31.03.21

