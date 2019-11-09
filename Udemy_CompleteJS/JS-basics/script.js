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

/***********************************
* FUNCTIONS
************************************/
/*
function calculateAge (birthYear) {
    return 2019 - birthYear;
}

var ageWendy = calculateAge(1982);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageWendy, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
   
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1968, 'Mike');
yearsUntilRetirement(1948, 'Jane');
*/

/***********************************
* FUNCTION EXPRESSIONS and DECLARATIONS
************************************/
/*
// function declaration
// function whatDoYouDo(job,firstName)

// function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
            // after a return no break statement is needed
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/***********************************
* ARRAYS
************************************/
/*
// Initialize new array
var names = ['Wendy', 'John', 'Jane'];
var years = new Array(1982, 1996, 1948);

console.log(names);
console.log(names.length);
console.log(names[0]);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['john', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
*/

/***********************************
* OBJECTS and PROPERTIES
************************************/
/*
// Object literal
var wendy = {
    firstName: 'Wendy',
    lastName: 'Van Craen',
    birthYear: 1982,
    family: ['Nathan', 'Jessy', 'Bart', 'Diane', 'Guido'],
    job: 'junior web developer',
    isMarried: true
};

// Access object data
console.log(wendy.firstName);
console.log(wendy['lastName']);
var x = 'birthYear';
console.log(wendy[x]);

// Mutate object data
wendy.job = 'designer';
wendy['isMarried'] = false;
console.log(wendy);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/***********************************
* OBJECTS and METHODS
************************************/
/*
var wendy = {
    firstName: 'Wendy',
    lastName: 'Van Craen',
    birthYear: 1982,
    family: ['Nathan', 'Jessy', 'Bart', 'Diane', 'Guido'],
    job: 'junior web developer',
    isMarried: true,
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
};

// console.log(wendy.calcAge());
// var age = wendy.calcAge();
// wendy.age = wendy.calcAge();
wendy.calcAge();
console.log(wendy);*/


