function Card(word, number) {
  
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



function assignCards(cardsToAssign){
  var cardsDeck = $("div.word-cards");
  var htmlForCards = "";
  for (var i = 0; i<cardsToAssign.cards.length; i++){
    $(".word-cards").append("<div class='word-card'>" + cardsToAssign.cards[i] + "</div>");
  }
  cardsDeck.append(htmlForCards);
}

$(document).ready(function() {
  $("#start").click(function(){
    var cards = new Card();
    var deck = cards.wordDeck();
    assignCards(cards);
  });
});