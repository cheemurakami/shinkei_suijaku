function Card(word, number) {
  this.word = word;
  this.number = number;
  this.cards = [];
  this.id = 0
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
Card.prototype.assignId = function(){
  var wordCardsRandom = this.wordDeck();
  wordCardsRandom.forEach(function(item, i){
    item.id = i + 1;
  })
  return this.id;
}
Card.prototype.valueChecker = function(){ //want to know the value when its clicked

}

function assignCards(cardsToAssign){
  var cardsDeck = $("div.word-cards");
  var htmlForCards = "";
  for (var i = 0; i<cardsToAssign.cards.length; i++){
    htmlForCards = $(".word-cards").append("<div class='word-card' id=" + i + ">" + cardsToAssign.cards[i] + "</div>");
  }
  cardsDeck.append(htmlForCards);
}

function showCard(cardId){
  cards.valueChecker(cardId);
  cards.assignId(cardId);  //clicked div no val wo show
}
function attachCardListeners(){
  $("div.word-cards").on("click", "div", function(){
    showCard(this.id);
  });
};



var cards = new Card();
$(document).ready(function() {
  attachCardListeners(cards);
  $("#start").click(function(){
    cards.wordDeck();
    cards.assignId();
    assignCards(cards); // show array of cards

  });
});