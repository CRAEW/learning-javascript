// Select container field
let field = document.getElementById("field");

// Select generate-button and add click-event
let standard = document.getElementById("generate");
standard.addEventListener("click", generateField);

// Select radomize-button and add click-event
let random = document.getElementById("random");
random.addEventListener("click", makeRandom);




function generateField() {
    /*
    Write your code here to generate a field as indicated in the image.
    For now you don't need to write any CSS. Any necessary classes are already provided!
    */
    reset();

    for (let i = 0; i < 10; i++)
    {
      for (let j = 0; j < 10; j++)
      {
        // WVC: Create a div with classname "cell"
        let createCell = document.createElement("div");
        createCell.className += "cell";

        // WVC: Add these divs to your html
        field.append(createCell);

        if ((i % 2 == 0) && (j % 2 == 0)) {
          createCell.classList.add('bgblack');
          createCell.innerHTML = 10 * i + j + 1;
        } else if ((i % 2 !== 0) && (j % 2 !== 0)) {
          createCell.classList.add('bgblack');
          createCell.innerHTML = 10 * i + j + 1;
        } else {
          createCell.innerHTML = 10 * i + j + 1;
        }
      };
    };
}

function makeRandom() {
    /*
    Write your code here to randomize the colors.
    You could do this for example by making some classes in CSS with different color schemes,
    and then asigning a random one to each cell.
    */

    // WVC: re-use the generateField function
    generateField();

    // WVC: selecty all the divs with classname "cell"
    let cell = document.querySelectorAll('div.cell');
    let i;

    //WVC: iterate over all your divs
    for (i = 0; i < cell.length; ++i) {
      //WVC: create random values for rgb
      let r = Math.floor((Math.random() * 255) + 1);
      let g = Math.floor((Math.random() * 255) + 1);
      let b = Math.floor((Math.random() * 255) + 1);
      //WVC: determine the brightness ofyour color
      let brightness = ((r * 299) + (g * 587) + (b *114)) / 1000;

      // WVC: give random color to background of div.cell
      cell[i].style.backgroundColor = `rgb( ${r}, ${g}, ${b})`;

      //WVC: light textcolor for dark cells and black textcolor for light cells
      if (brightness < 123) {
        cell[i].style.color = "#fff";
      } else {
        cell[i].style.color = "#000";
      }
    }
}

function reset() {
    field.innerHTML = "";
}
