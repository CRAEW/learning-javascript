// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [23, -3];

// 1) Problems
// - Temp amplitude = highest - lowes temp
// - Compute max-min temp
// - What is a sensor error? And what to do ?

// 2) Sub-problems
//  - How ignore errors
//  - Find max
//  - Find min
//  - max-min + return

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Problems
//  - how merge 2 arrays

// const calcTempAmplitude = function (temps1, temps2) {
//   let temps = temps1.concat(temps2);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures, temperatures2);
// console.log(amplitude);

// DEBUGGING

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // C) FIX
//     // value: Number(prompt('Degrees Celius:')),
//     value: 10,
//   };

//   // B) FIND
//   console.table(measurement);
//   // console.log(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;

//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     // debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY
// console.log(amplitudeBug);
