// Variables
let register = document.getElementById('submit');

let form = document.getElementById('registerForm');
let pwFields = document.getElementsByClassName('passwords');
let password = document.getElementById('password');
let passwordCheck = document.getElementById('passwordcheck');

// Object in which to store the data
let user = {};

// Submit button click event
register.addEventListener('click', formValidation);

function formValidation(event) {
  // event.preventDefault();
  console.log('Yay, you clicked the button!');
  console.log('Checking validity of your input.');

  //Check if all required fields are completed
  if(form.checkValidity() === false) {
    console.log(form.checkValidity());
    console.log('Please fill in all the required fields.');
  } else if (password.value !== passwordCheck.value) {
      // alert("You entered two different passwords. Make sure that your password and the confirm password are identical.")
      console.log('passwords don\'t match.');
      for (i = 0; i <= pwFields.length; i++) {
        let pwError = document.createElement('p');
        pwError.innerHTML = 'Passwords must be identical.';
        pwFields[i].append(pwError);
      };
  } else {
    console.log('Great! You entered all required data correctly!')
    console.log('Let\'s store your info!');
    createObjectValues();
    console.log(user);
    window.open('succes.html', '_blank');
  };
}

// This function selects the input field by id and stores it in a variable
function setVariable(id) {
  return document.getElementById(id).value;
}

// This function create the object key-values
function createObjectValues() {
  user = {};
  // Define the key-value pairs
  user.firstname = setVariable('firstname');
  user.lastname = setVariable('lastname')
  user.username = setVariable('username');
  user.email = setVariable('email');
  user.password = setVariable('password');
  user.passwordcheck = setVariable('passwordcheck');
  user.address = setVariable('address');
  user.city = setVariable('city');
  user.zip = setVariable('zip');
  user.phone = setVariable('phone');
  user.age = setVariable('age');
  user.hobbies = setVariable('hobbies');

  // Store the object in the browser
  sessionStorage.setItem('user', JSON.stringify(user));
}

let item = JSON.parse(sessionStorage.getItem('user'));
console.log(item);
