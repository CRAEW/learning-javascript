// Create empty object to store key-value paires
let randomQuote = {};
let xhr;
let quoteWrapper = document.getElementById('quote');
let textBlock, authorBlock, quoteBlock;
let imageBlock, img;

// Create event listener
document.getElementById('button').addEventListener('click', loadQuote);

loadQuote();

function loadQuote() {
  // Create XHR object
  xhr = new XMLHttpRequest();

  // OPEN - type, url/file, async
  xhr.open('GET', 'https://thatsthespir.it/api', true);

  // LOAD the API
  xhr.onload = function() {
    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not found"
    if(this.status == 200) {
      SetRandomQuoteObject(JSON.parse(this.responseText));
      console.log(this.responseText);

      //display quote in html
      displayQuote();
    }
  }

  xhr.onerror = function() {
    console.log("Request error...");
  }

  // Sends request;
  xhr.send();
}

// Save values in the object
function SetRandomQuoteObject(data) {
  console.log('Data found!');
  randomQuote.quote = data.quote;
  randomQuote.author = data.author;
  randomQuote.id = data.id;
  randomQuote.photo = data.photo;
  randomQuote.slug = data.slug;
  randomQuote.gender = data.gender;
  randomQuote.totalQuotes = data.total_quotes;

  console.log(randomQuote);
}

// After loading the API, display the info in HTML
function displayQuote() {
  reset();

  // Add Author  and quote to the quoteblock
  textBlock = document.createElement('div');
  textBlock.classList.add('textBlock');

  authorBlock = document.createElement('h2');
  authorBlock.innerHTML = randomQuote.author;
  quoteBlock = document.createElement('p');
  quoteBlock.innerHTML = randomQuote.quote;
  textBlock.append(authorBlock, quoteBlock);

  // Add image to the quoteblock
  imageBlock = document.createElement('div');
  imageBlock.classList.add('authorImage');

  img = document.createElement('img');
  if(randomQuote.photo === "") {
    img.src = 'https://picsum.photos/500/500';
  } else {
    img.src = randomQuote.photo;
  }
  img.setAttribute('alt', randomQuote.slug);
  imageBlock.appendChild(img);

  // Display all this candy in your html
  quoteWrapper.append(textBlock, imageBlock);

}

function reset() {
  quoteWrapper.innerHTML = "";
}
