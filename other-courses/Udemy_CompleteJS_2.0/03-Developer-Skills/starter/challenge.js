///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1) Understanding the problem
-  combine numbers in a string
- loop over array but return as 1 string


// 2) Breaking up into sub-problems
- Create a function that accepts an array as an argument
- const forecast = empty string
- const temp = loop over array and get [i] as temperature
- const day = get [i]+1 as the day
- add temp and day to the end of the string
- return the string
*/

const printForecast = function (arr) {
  let forecast = '... ';

  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].toString();
    const day = Number([i]) + 1;

    forecast += ` ${temp} ºC in ${day} days ...`;
  }
  console.log(forecast);
};

printForecast([12, 5, -5, 0, 4]);
