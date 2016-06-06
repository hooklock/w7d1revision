window.onload = function(){
  main();
};

var main = function(){
  var qod = document.getElementById('quote-of-the-day');
  console.log(qod.innerText);
  var but = document.getElementsByTagName('button');
  console.log(but[0]);
  var lastQuote = document.getElementsByClassName('quote');
  var lq = lastQuote[lastQuote.length-1];
  console.log(lq.innerText);
  var qodHidden = document.getElementById('quote-of-the-day');
  console.log(qodHidden.hidden=true);

  var articles = document.getElementsByTagName('article');

  for (var i = 0; i < articles.length; i++) {
    articles[i].style.backgroundColor = 'wheat';
  }

  createQuote();

};

function createQuote(){
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');

  var blockQuote = document.createElement('blockquote');
  blockQuote.innerText = "Open the pod bay doors Hal";

  var cite = document.createElement('cite');
  cite.innerText = "Dave";

  blockQuote.appendChild(cite);

  quoteArticle.appendChild(blockQuote);

  var quotes = document.querySelector('#quotes');
  quotes.appendChild(quoteArticle);
}
