var x, y, z; // You can declare several variables at once.
x = 5; // The '='-sign is used to assign a value to the declared variable.
y = 10; // Using semi-colon at the end is good practice.
z = x + y; // You can combine variables and operators to assign a value to a new variable.



// TYPES OF VARIABLES
var hello = "Hello world!"; // OLD way. Avoid using this. Global scope. Can be re-declared. In ES6 let and const were added.
let yesOrNo = true; // let is constrained to whichever scope it is declared in. let cannot be re-declared.
const number = 42; // Const is limited to the scope in which it operates. Cannot be re-declared. But more strict. The assigned value cannot change throughout the code. Const variables MUST be initialized (assigned a value).

// LOG TO CONSOLE
/*
The console.log() method writes a message to the console. The console is useful for testing purposes.
*/
console.log(z);
console.log(hello);
console.log(yesOrNo);
console.log(number);

/*
The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects. In other words, console.dir() is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.
*/
console.dir(z);
console.dir(hello);
console.dir(yesOrNo);
console.dir(number);

console.log([1, 2]);
console.dir([1, 2]);

// DATA TYPES
var age = 37; // Number, you can use mathemathics on these
var name = "Wendy"; // String, you cannot use mathemathics, but you can use + to concatenate strings
var developer = true; // Boolean only truthy of falsy values
//var location  = null;          // Null
//var blue;                      // undefined
var vacation = ["Spain", "Italie", "Germany"] // Array when you need a list of variables that can be declared with the same name
var person = {
  name: "Wendy",
  age: 37,
  married: true
} //Object

console.dir(person);
console.dir(vacation);
console.log(vacation[2]);

// OPERATORS
/* Arithmethic */
/* perform arithmetics on numbers in literals or variables. */
var ar = 10 + 5; // add
var br = 10 - 5; // substract
var cr = 10 * 5; // multiply
var dr = 10 / 5; // divide
var er = 10 % 6; // modulus, give the remaining value after the division
var fr = 10;

fr++;
var gr = fr; // increment with 1 every time the function is executed

fr--;
var hr = fr; // decrement with 1 every time the function is executed

/* Assignment */
fr += 5; // adds a value to a declared variale, is shorthand for f = f + 5
fr -= 5; // substracts a value from a declared variable, shorthand for f = f - 5
fr *= 5; // multiplies a value from a declared variable, shorthand for f = f * 5
fr /= 5; // divides a value from a declared variable, shorthand for f = f / 5

console.log(ar, br, cr, dr, er, fr, gr, hr);

// OPERATORS
/* Arithmethic */
/* perform arithmetics on numbers in literals or variables. */

// CREATE TABLE
document.write("<h2>" + "Numbers and operators" + "</h2>")
document.write("<p>" + "var a = 10, b = 5, c = 2;" + "</p>")
var a = 10,
  b = 5,
  c = 6;

document.write("<table>");

document.write("<tr>");
document.write("<th>" + "Combination" + "</th>")
document.write("<th>" + "Result in the console" + "</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + "a + b" + "</td>")
document.write("<td>" + (a + b) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + "a - b" + "</td>")
document.write("<td>" + (a - b) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + "a * b" + "</td>")
document.write("<td>" + (a * b) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + "a / b" + "</td>")
document.write("<td>" + (a / b) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + "a % c" + "</td>")
document.write("<td>" + (a % c) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + "++a" + "</td>")
document.write("<td>" + (++a) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + "a++" + "</td>")
document.write("<td>" + "First log result: " + (a++) + " Second: " + a + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + "--a" + "</td>")
document.write("<td>" + (--a) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + "a--" + "</td>")
document.write("<td>" + "First log result: " + (a--) + " Second: " + a + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + "a += 100" + "</td>")
document.write("<td>" + (a += 100) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + "a -= 100" + "</td>")
document.write("<td>" + (a -= 100) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + "a *= 3" + "</td>")
document.write("<td>" + (a *= 3) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + "a /= 3" + "</td>")
document.write("<td>" + (a /= 3) + "</td>");
document.write("</tr>");
document.write("</table>");

// COMBINE ALL DATATYPES and OPERATORS
// Numbers (see above)
// Strings
document.write("<h2>" + "Combine strings and numbers and operators" + "</h2>")
document.write("<p>" + "var string24 = 200;" + "</p>")

document.write("<table>");

document.write("<tr>");
document.write("<th>" + "Combination" + "</th>")
document.write("<th>" + "Result in the console" + "</th>");
document.write("</tr>");

var string1 = "5" + "5" + "5";
var string2 = 5 + 5 + "5";
var string3 = "5" + 5 + 5;
var string4 = "test" + 5 + 5;

document.write("<tr>");
document.write("<td>" + ' var string1 = "5" + "5" + "5"; ' + "</td>")
document.write("<td>" + string1 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string2 = 5 + 5 + "5"; ' + "</td>")
document.write("<td>" + string2 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string3 = "5" + 5 + 5; ' + "</td>")
document.write("<td>" + string3 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string4 = "test" + 5 + 5; ' + "</td>")
document.write("<td>" + string4 + "</td>");
document.write("</tr>");

var string5 = "test" - "1";
var string6 = "test" - "test";
var string7 = "5" - "1";
var string8 = 5 - "1"

document.write("<tr>");
document.write("<td>" + ' var string5 = "test" - "1";" ' + "</td>")
document.write("<td>" + string5 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string6 = "test" - "test"; ' + "</td>")
document.write("<td>" + string6 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string7 = "5" - "1"; ' + "</td>")
document.write("<td>" + string7 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string8 = 5 - "1" ' + "</td>")
document.write("<td>" + string8 + "</td>");
document.write("</tr>");

var string9 = "5" * 2;
var string10 = "hallo" * 2;
var string11 = 5 * "2";
var string12 = 5 * "hallo";

document.write("<tr>");
document.write("<td>" + ' var string9 = "5" * 2; ' + "</td>")
document.write("<td>" + string9 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string10 = "hallo" * 2; ' + "</td>")
document.write("<td>" + string10 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string11 = 5 * "2"; ' + "</td>")
document.write("<td>" + string11 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string12 = 5 * "hallo"; ' + "</td>")
document.write("<td>" + string12 + "</td>");
document.write("</tr>");

var string13 = "10" / 2;
var string14 = "hallo" / 2;

document.write("<tr>");
document.write("<td>" + ' var string13 = "10" / 2; ' + "</td>")
document.write("<td>" + string13 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string14 = "hallo" / 2; ' + "</td>")
document.write("<td>" + string14 + "</td>");
document.write("</tr>");

var string15 = "10" % 6;
var string16 = "10" % "6";
var string17 = "hallo" % "6";

document.write("<tr>");
document.write("<td>" + ' var string15 = "10" % 6;' + "</td>")
document.write("<td>" + string15 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string16 = "10" % "6"; ' + "</td>")
document.write("<td>" + string16 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string17 = "hallo" % "6"; ' + "</td>")
document.write("<td>" + string17 + "</td>");
document.write("</tr>");

var string18 = ++string1;
var string19 = string1++;
var string20 = string4++;

document.write("<tr>");
document.write("<td>" + ' var string18 = ++string1; ' + "</td>")
document.write("<td>" + string18 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string19 = string1++; ' + "</td>")
document.write("<td>" + string19 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string20 = string4++; ' + "</td>")
document.write("<td>" + string20 + "</td>");
document.write("</tr>");

var string21 = --string1;
var string22 = string1--;
var string23 = string4--;

document.write("<tr>");
document.write("<td>" + ' var string21 = --string1; ' + "</td>")
document.write("<td>" + string21 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string22 = string1--; ' + "</td>")
document.write("<td>" + string22 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' var string23 = string4--; ' + "</td>")
document.write("<td>" + string23 + "</td>");
document.write("</tr>");

var string24 = 200;
string24 += string1;

document.write("<tr>");
document.write("<td>" + ' string24 += string1; ' + "</td>")
document.write("<td>" + string24 + "</td>");
document.write("</tr>");

var string24 = 200;
string24 += string2;

document.write("<tr>");
document.write("<td>" + ' string24 += string2; ' + "</td>")
document.write("<td>" + string24 + "</td>");
document.write("</tr>");

var string24 = 200;
string24 += string4;

document.write("<tr>");
document.write("<td>" + ' string24 += string4; ' + "</td>")
document.write("<td>" + string24 + "</td>");
document.write("</tr>");

var string24 = 200;
string24 -= string1;

document.write("<tr>");
document.write("<td>" + ' string24 -= string1; ' + "</td>")
document.write("<td>" + string24 + "</td>");
document.write("</tr>");

var string24 = 200;
string24 -= string2;

document.write("<tr>");
document.write("<td>" + ' string24 -= string2; ' + "</td>")
document.write("<td>" + string24 + "</td>");
document.write("</tr>");

var string24 = 200;
string24 -= string4;

document.write("<tr>");
document.write("<td>" + ' string24 -= string4; ' + "</td>")
document.write("<td>" + string24 + "</td>");
document.write("</tr>");

var string24 = 200;
string24 *= string1;

document.write("<tr>");
document.write("<td>" + ' string24 *= string1; ' + "</td>")
document.write("<td>" + string24 + "</td>");
document.write("</tr>");

var string24 = 200;
string24 *= string2;

document.write("<tr>");
document.write("<td>" + ' string24 *= string2; ' + "</td>")
document.write("<td>" + string24 + "</td>");
document.write("</tr>");

var string24 = 200;
string24 *= string4;

document.write("<tr>");
document.write("<td>" + ' string24 *= string4; ' + "</td>")
document.write("<td>" + string24 + "</td>");
document.write("</tr>");

var string24 = 200;
string24 /= string1;

document.write("<tr>");
document.write("<td>" + ' string24 /= string1; ' + "</td>")
document.write("<td>" + string24 + "</td>");
document.write("</tr>");

var string24 = 200;
string24 /= string2;

document.write("<tr>");
document.write("<td>" + ' string24 /= string2; ' + "</td>")
document.write("<td>" + string24 + "</td>");
document.write("</tr>");

var string24 = 200;
string24 /= string4;

document.write("<tr>");
document.write("<td>" + ' string24 /= string4; ' + "</td>")
document.write("<td>" + string24 + "</td>");
document.write("</tr>");

document.write("</table>");

// BOOLEANS
document.write("<h2>" + "Booleans" + "</h2>")

document.write("<table>");

document.write("<tr>");
document.write("<th>" + "Combination" + "</th>")
document.write("<th>" + "Result in the console" + "</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' true + true ' + "</td>")
document.write("<td>" + (true + true) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' true + false ' + "</td>")
document.write("<td>" + (true + false) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' true - true ' + "</td>")
document.write("<td>" + (true + true) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' true - false ' + "</td>")
document.write("<td>" + (true + false) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' true * true ' + "</td>")
document.write("<td>" + (true + true) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' true * false ' + "</td>")
document.write("<td>" + (true + false) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' true / true ' + "</td>")
document.write("<td>" + (true + true) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' true / false ' + "</td>")
document.write("<td>" + (true + false) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' "string" + true ' + "</td>")
document.write("<td>" + ("string" + true) + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ' true + "string" ' + "</td>")
document.write("<td>" + (true + "string") + "</td>");
document.write("</tr>");

var booleantrue = true;

document.write("<tr>");
document.write("<td>" + ' var booleantrue = true; <br> booleantrue += true ' + "</td>")
document.write("<td>" + (booleantrue += true) + "</td>");
document.write("</tr>");

document.write("</table>");




console.log(`The result is ${a}.`);
