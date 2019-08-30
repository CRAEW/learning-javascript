function getRaceAndItems() {
  let p1Races = document.getElementById("p1RaceDropdown");
  let p2Races = document.getElementById("p2RaceDropdown");
  let p1RaceResult = p1Races.options[p1Races.selectedIndex].text.toLowerCase();
  let p2RaceResult = p2Races.options[p2Races.selectedIndex].text.toLowerCase();
  let p1Items = document.getElementById("p1ItemsDropdown");
  let p2Items = document.getElementById("p2ItemsDropdown");
  let p1ItemsResult = p1Items.options[p1Items.selectedIndex].text.toLowerCase();
  let p2ItemsResult = p2Items.options[p2Items.selectedIndex].text.toLowerCase();

  document.getElementById("p1Img").src = "images/races/" + p1RaceResult + "1.png";
  document.getElementById("p2Img").src = "images/races/" + p2RaceResult + "2.png";
  document.getElementById("p1ItemImg").src = "images/items/" + p1ItemsResult + "1.png";
  document.getElementById("p2ItemImg").src = "images/items/" + p2ItemsResult + "2.png";

  console.log(p1RaceResult);
  console.log(p2RaceResult);
  console.log(p1ItemsResult);
  console.log(p2ItemsResult);
}

let startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", getRaceAndItems);
