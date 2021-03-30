// Loops in JS

let arr = [1,2,3,4,5,6,7]
console.log(arr.length)
for (i= 0; i < arr.length; i++) {
    console.log('This is a loop')
}

// Statement Skip, always add break

for (let i = 0;; i++) {
    console.log("loop, i = " + i);
    if (i > 2)
    break;
}

// Multiple Statements

let counter = 0
function inc() { counter++; }
for (let i = 0; i < 10; i++, inc());
console.log(counter); // 10

//For Loop and Let Scope

for ( var i=0; i < 10; i++) 
{let x = i; 
console.log(x) 
}

//Nested Loops

for (let y = 0; y < 2; y++)
for (let x = 0; x < 2; x++)
console.log(x, y);

//Loop Length

for ( let i = 0; i < 3; i++) console.log("loop.");

// Skipping Steps

for ( let i = 0; i < 3; i++) { if ( i == 1) continue;
console.log( i );}

//Breaking Early

for ( let i = 0;; i++) { console.log("loop"); break;} ;

// for...of loops and strings

let string = 'HamishDrogemuller';for (let value of string)
console.log( value );
console.log( string.length)

// for...of loops and arrays

let array = [0, 1, 2];

for (let value of array)
console.log(value );

//for...of loops and objects

//let object = { a: 1, b: 2, c: 3};
//for (let value of object) // Error: object is not iterable
//console.log( value );

//let enumerable = { property: 1, method : () => {} };
//for (let key of object.key(enumerable))
//console.log(key);
console.log("------------")
// While Loops

let v = 0;
while (v++ < 5)
console.log(v) ;

let c = 0;
while (c++ < 1000) {
    if (c > 1)
    continue;
    console.log(c);
}

// Lesson 24.03.21

//Switch Statement

const person ='Joe';
switch (person) {
case 'Jane':
console.log('Hi Jane');
break;
case 'John':
console.log('Hi John');
break;
case 'Joe':
console.log('Hi Joe');
break;
case 'Mary':
console.log('Hi Mary');
break;
default:
console.log('Hi');
break;
}

//Refactor
const score =70;
switch (score) {
 case 100:
console.log('You have passed with a marking of A');
 break;
 case 80:
console.log('You have passed with a marking of B');
 break;
case 70:
console.log('You have passed with a marking of C');
break;
case 40:
console.log('You have failed this task with a marking of F');
break;
default:
console.log('Markings for this assessment have not been allocated');
break;
}

const gradeKeyWord ='A';
switch (gradeKeyWord) {
 case 'A':
console.log('A = 100');
 break;
 case 'B':
console.log('B = 90');
 break;
case 'C':
console.log('C = 70');
break;
case 'F':
console.log('F = 40');
break;
default:
console.log('Markings for this assessment have not been allocated');
break;
}

//Multi-Criteria Cases

const V = 1;
switch (V) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('I like this number')
        break;
    case -1:
    case -4:
        console.log('I love this number');
        break;
    default:
        console.log('I don\'t like this number.');
}

//Chained Expressions

const foo = 1;
let output = '';
switch (foo) {
    case 0:
        output += 'So ';
    case 1:
        output += 'How ';
        output += 'Old ';
    case 2:
        output += 'Are ';
    case 3:
        output += 'You';
    case 4:
        output += '?';
        console.log(output);
        break;
    case 5:
        output += '!';
        console.log(output);
        break;
    default:
        console.log('Please pick a number from 0 to 5!');
}

//Greater/Less than switch

let gradeStudent = 95

switch (true) {

case (gradeStudent >= 90): 
    console.log('My grade is A+')
    break
case (gradeStudent >= 80):
    console.log('My grade is B+')
    break
case (gradeStudent >= 70):
    console.log('My grade is C')
    break
case (gradeStudent <= 60):
    console.log('My grade is F')
    break
default:
    console.log('Error')
    break;
}

//Ternary Operator (ES6)

let Individual = {
    name: 'Hamish',
    age: 23,
    driver: null
};
Individual.driver = Individual.age >=16 ? 'yes' : 'No' ;

if (Individual.age >= 16) {
    Individual.driver = 'Yes';
    } else {
        Individual.driver = 'No';
    }
console.log(Individual)


//Ternary Example
let isStudent = true;

let price = isStudent? 8 : 12
console.log(price); //8

//Nested Ternary
let Student = false;
let Senior = true;
let Cost = Student ? 8 : Senior ? 6 : 12
console.log(Cost); //6

let SDT = true;
let price = 12;STD ? (
    price = 
)