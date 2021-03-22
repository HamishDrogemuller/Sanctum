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