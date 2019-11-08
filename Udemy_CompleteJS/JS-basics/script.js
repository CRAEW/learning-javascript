/*console.log('Hello World from a seperate file.');*/

/***********************************
* VARIABLES  
************************************/
/*
var firstVariable = 'firstValue';
var firstName = 'Wendy';
console.log(firstName);

var lastName = 'Van Craen';
var age = 37;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'junior webdeveloper';
console.log(job);

var _3years = 'don\'t start or use with numbers or special tokens';
var $4years = 'underscore and dollar can be used';
*/

/***********************************
* MUTATE VARIABLES AND TYPE-COERCION  
************************************/
/*
var firstName = 'Wendy';
var age = 37;

// type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'web developer';
isMarried = true;

console.log(firstName + 'is a ' + age + ' yeard old ' + job + '. Is she married? ' + isMarried);

// Variable mutation
age = 'thirty-seven';
job = 'graphic designer';

alert(firstName + ' is a ' + age + ' yeard old ' + job + '. Is she married? ' + isMarried);

var lastName = prompt('What is her last Name?');
console.log(lastName + ' ' + firstName);
*/

/***********************************
* BASIC OPERATORS 
************************************/
/*
var year, yearWendy, yearNathan, ageWendy, ageNathan;
now = 2019
ageWendy = 37;
ageNathan = 4;

// Math operators
yearWendy = now - ageWendy;
yearNathan = now - ageNathan;

console.log(yearWendy);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var wendyOlder = ageWendy > ageNathan;
console.log(wendyOlder);

// typeof operator
console.log(typeof wendyOlder);
console.log(typeof ageWendy);
console.log(typeof 'This is a string.');
var x;
console.log(typeof x);
*/

/***********************************
* OPERATOR PRECEDENCE
************************************/
/*
var now = 2019;
var yearWendy = 1982;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearWendy >= fullAge;
console.log(isFullAge);

// Grouping
var ageWendy = now - yearWendy;
var ageNathan = 4;
var average = (ageWendy + ageNathan) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2; // x = x * 2;
console.log(x);
x += 10
console.log(x);
x++ //x = x + 1;
console.log(x);
x-- //x = x - 1;
console.log(x);
*/

/***********************************
* IF / ELSE STATEMENTS
************************************/
/*
var firstName = 'Wendy';
var civilStatus = 'married';

if (civilStatus === 'married') {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is single.');
}

var isMarried = false;
if (isMarried) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is single.');
}
*/

/***********************************
* BOOLEAN LOGIC
************************************/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/***********************************
* TERNARY OPERATOR and SWITCH STATEMENT
************************************/
/*
var firstName = 'John';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch statement
var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' hasn\'t got a job.');
}

age = 22;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
    console.log(firstName + ' is a man.');
}
*/

/***********************************
* TRUTHY AND FALSY VALUES and EQUALITY OPERATORS
************************************/
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined.');
}

// Equality operators
if (height == '23') {
    console.log('The == operatero does type coercion!');
}
*/