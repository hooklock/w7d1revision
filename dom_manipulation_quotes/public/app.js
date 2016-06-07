var quoteArray = [
  {title: "Visual Basic is the way forward, I don't know why we are doing JavaScript.", author: "Jay Chetty"},
  {title: "The only CSS you need to know is background-color: tomato", author: "Rick"},
  {title: "I used the jQuery diet plugin and lost 10kg in a week.", author: "Keith"},
  {title: "Scaffolding is nothing but a fiery hell.", author: "Valerie"},
  {title: "Open the pod bay doors Hal.", author: "Dave"},
  {title: "That is quite obviously a frog.", author: "Jay Chetty"}
];

var main = function(){
  // var qod = document.getElementById('quote-of-the-day');
  // console.log(qod.innerText);
  // var but = document.getElementsByTagName('button');
  // console.log(but[0]);
  // var lastQuote = document.getElementsByClassName('quote');
  // var lq = lastQuote[lastQuote.length-1];
  // console.log(lq.innerText);
  // var qodHidden = document.getElementById('quote-of-the-day');
  // console.log(qodHidden.hidden=true);

  // var articles = document.getElementsByTagName('article');

  // for (var i = 0; i < articles.length; i++) {
    // articles[i].style.backgroundColor = 'wheat';
  // }


  //loop round quotes array.
  //call createQuote each time
  //passin the quote object at quoteArray[i]
  for (var i = 0; i < quoteArray.length; i++) {
    createQuote(quoteArray[i]);
  }

  var button = document.getElementById("add-button");
  button.onclick = handleClick;

  var form = document.getElementById("quote-form");
  form.onsubmit = handleSubmit;

};

var handleSubmit = function(event){
  event.preventDefault();
  handleClick();
};

var handleClick = function(){
  var input = document.getElementById("quote-title-input");
  var quoteTitle = input.value;
  // console.log(quoteTitle);
  addQuote(quoteTitle);
};

function createQuote(quoteObject){
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');

  var blockQuote = document.createElement('blockquote');
  blockQuote.innerText = quoteObject.title + " ";

  var cite = document.createElement('cite');
  cite.innerText = quoteObject.author;

  blockQuote.appendChild(cite);

  quoteArticle.appendChild(blockQuote);

  var quotes = document.querySelector('#quotes');
  quotes.appendChild(quoteArticle);
}

function addQuote(quoteTitle){
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');

  var blockQuote = document.createElement('blockquote');
  blockQuote.innerText = quoteTitle;

  var cite = document.createElement('cite');
  cite.innerText = quoteObject.author;

  blockQuote.appendChild(cite);

  quoteArticle.appendChild(blockQuote);

  var quotes = document.querySelector('#quotes');
  quotes.appendChild(quoteArticle);
}

window.onload = main;
