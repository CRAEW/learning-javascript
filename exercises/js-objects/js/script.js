let familyButton = document.querySelectorAll("button");
let img = document.getElementById("familyImage");

//Create an object
let AboutMe = {
  name: "Wendy",
  age: 37,
  gender: "female",
  favoriteFood: "fajita",
  favoriteSeries: ["Mister Robot", "Westworld", "Lucifer"],
  favoriteMovies: ["De Kleine Zeemeermin", "pride and Prejudice", "Tron", "Star Wars"],
  single: false,
  url: "images/me.jpg",
  button: familyButton[0].addEventListener('click',function(){
    img.src = AboutMe.url;
    console.log(AboutMe);
  })
}

//Create a constructor
function FamilyMember(name, age, gender, food, series, movies, single, url, familyButton) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.favoriteFood = food;
  this.favoriteSeries = series;
  this.favoriteMovies = movies;
  this.single = single;
  this.url = url;
  this.familyButton = familyButton;
  // console.log(this);

  //create a method
  familyButton.addEventListener('click',function() {
    img.src = url;
  });
}

familyButton[1].addEventListener('click',function() {
  console.log(father);
});
familyButton[2].addEventListener('click',function() {
  console.log(mother);
});
familyButton[3].addEventListener('click',function() {
  console.log(sister);
});

//Create the objects witht the constructor
let father = new FamilyMember(
  "Guido",
  62,
  "male",
  "french cuisine",
  ["a", "b", "c"],
  ["1", "2", "3"],
  false,
  "images/father.jpg",
  familyButton[1]
)

let mother = new FamilyMember(
  "Diane",
  62,
  "female",
  "french cuisine",
  ["a", "b", "c"],
  ["1", "2", "3"],
  false,
  "images/mother.jpg",
  familyButton[2]
)

let sister = new FamilyMember(
  "Jessy",
  39,
  "female",
  "fajita",
  ["a", "b", "c"],
  ["1", "2", "3"],
  false,
  "images/sister.jpg",
  familyButton[3]
)
