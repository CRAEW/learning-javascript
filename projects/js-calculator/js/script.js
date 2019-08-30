/*
Write your script here!
Note: it is advised to work on this in small steps!
    1. When you click a button, make your code log something to the console.
        This way you can see if your event listener is linked properly!
    2. When you click a button, make the number/operation appear in the calc-preview div.
    3. ......
*/

//Nodelist of alle numbers and operations
let calcNumbers = document.querySelectorAll('#calc-numbers button');
let operations = document.querySelectorAll('#operations button');

//Select the display
let calcPreview = document.getElementById('calc-preview');

//EventListener to display the number or calculation in display
for(i = 0; i < calcNumbers.length; i++) {
  calcNumbers[i].addEventListener("click", display);
}

for(i = 0; i < operations.length - 2; i++) {
  operations[i].addEventListener("click", display);
}

operations[5].addEventListener("click", calculate); // =
operations[6].addEventListener("click", reset); // C

//Toggle class on mouseover
let allButtons = document.querySelectorAll('button');
for(i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("mouseover", function()
  {
    this.classList.toggle('hovering');
  });
  allButtons[i].addEventListener("mouseout", function()
  {
    this.classList.toggle('hovering');
  });
}

//function to output the clicked value into the display
let calcValues = [];
let result;

function display() {
  calcValues.push(this.innerHTML);

  for(let i=0; i < calcValues.length; i++) {
    calcValues[i] = calcValues[i].replace(/%/g, '/100*');
  };


  calcPreview.innerHTML = calcValues.join("");
}

function calculate() {
  result = eval(calcValues.join(""));
  reset();
  calcPreview.innerHTML = result;
  calcValues.push(result);
  result = 0;
}

function reset() {
  while (calcValues.length > 0) {
    calcValues.pop();
  };
  if ((calcValues.length == 0) && (result == 0)) {
    calcPreview.innerHTML = "Make a calculation...";
  };
}

//EventListener for keyboard
document.addEventListener("keypress", function onEvent(event) {
  console.log(event.key);

  if (event.key == "=" || event.key == "Enter") {
    calculate();
  } else if ((event.key == "c") || (event.key == "C")){
    reset()
  } else {
    calcValues.push(event.key);

    for(let i=0; i < calcValues.length; i++) {
      calcValues[i] = calcValues[i].replace(/%/g, '/100*');
    };

    calcPreview.innerHTML = calcValues.join("");
  }
});
