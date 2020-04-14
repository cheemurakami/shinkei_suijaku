function Card(word, number) {
  this.word = word;
  this.number = number;
  this.cards = [];
}


//for this time we need 4 divs or some boxes for these cards////////////
Card.prototype.wordDeck = function (){
  var wordCards = ["apple", "apple", "orange", "orange"]; 
  this.cards = shuffle(wordCards);
 return this.cards; // wordCards array is random now
}
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


//give cards id with index number
function assignCards(cardsToAssign){
  var cardsDeck = $("div.word-cards");
  var htmlForCards = "";
  for (var i = 0; i<cardsToAssign.cards.length; i++){
    htmlForCards = $(".word-cards").append("<div class='word-card'>" + cardsToAssign.cards[i] + "</div>");
  }
  cardsDeck.append(htmlForCards);
}

function showCard(cards){
  console.log('hi');  //clicked div no val wo show
}
function attachCardListeners(){
  $("div.word-cards").on("click", "div", function(){
    showCard(this.word);
  });
};



var cards = new Card();
$(document).ready(function() {
  attachCardListeners(cards);
  $("#start").click(function(){
    cards.wordDeck();
    assignCards(cards); // show array of cards
  });
});