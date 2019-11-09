/***********************************
* Lecture: Hoisting  
************************************/
/*
//function declaration
calcAge(1982);

function calcAge(year) {
    console.log(2019 - year);
}

// calcAge(1982);

// function expression
// retirement(1982);

var retirement = function(year) {
    console.log(65 - (2019 - year));
}

// retirement(1982);

// variables
console.log(age); // undefined
var age = 23;
console.log(age);

function foo() {
    console.log(age); // undefined
    var age = 65;
    console.log(age);
}
foo(); //65
console.log(age); //23
*/

/***********************************
* Lecture: Scoping
************************************/

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();
    
    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    // console.log(a + b + c + d); // b and c are not in scope of this function
    console.log(a + d);
}
*/


/***********************************
* Lecture: The this keyword
************************************/
// global object this variable (window)
/*
// console.log(this);

calcAge(1985);
function calcAge(year) {
    console.log(2019 - year);
    console.log(this);
}

// this variable is local object
var john = {
    name: 'John',
    yearOfBirth: 1990,
    // in a method the this keyword points to the object
    calcAge: function() {
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        // in a regular function this point to window object
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        
    }
}

john.calcAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

// this keyword is only assigned to object AFTER the method is called
mike.calcAge = john.calcAge;
mike.calcAge();
*/