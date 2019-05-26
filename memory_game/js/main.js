console.log("Up and running!");
/* 
var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/
/*
var cards = ["Queen", "Queen", "King", "King"];
*/
var cards = [
{
	rank: 'queen',
	suit:'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit:'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit:'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit:'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!")
		} else {
			alert("Sorry, try again.")
		}
	}
}

function flipCard(cardID) {
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	checkForMatch();
}



flipCard(0);
flipCard(2);


	

/* 
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
	} else {
		alert("Sorry, try again.")
	}
}
*/