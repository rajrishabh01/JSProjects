const cardArray = [
    {
        name: 'basketball',
        img: 'images/basketball.jpeg'
    },{
        name: 'lime',
        img: 'images/lime.jpeg'
    },{
        name: 'pizza',
        img: 'images/pizza.jpeg'
    },{
        name: 'pony',
        img: 'images/pony.jpeg'
    },{
        name: 'tea',
        img: 'images/tea.jpeg'
    },{
        name: 'cricket',
        img: 'images/cricket.png'
    },
    {
        name: 'basketball',
        img: 'images/basketball.jpeg'
    },{
        name: 'lime',
        img: 'images/lime.jpeg'
    },{
        name: 'pizza',
        img: 'images/pizza.jpeg'
    },{
        name: 'pony',
        img: 'images/pony.jpeg'
    },{
        name: 'tea',
        img: 'images/tea.jpeg'
    },{
        name: 'cricket',
        img: 'images/cricket.png'
    },
]

// ascending Sort a - b -> if negative the a,b else b, a ; opposite b -a  is applicable for descending
// console.log([11, 4, 5 ,2].sort((a, b) => b-a))

//randomize cards
cardArray.sort(() => 0.5 - Math.random());

console.log(cardArray);

//access grid of cards to manipulate
const gridDisplay = document.querySelector('.grid');
const result = document.querySelector('#result');

//create cards on screen
function createBoard() {
    for(let i=0; i < cardArray.length ; i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/doctor.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

//Call to create block of cards
createBoard();

//Chosen cards
let chosenCards = [];
let chosenCardsId = [];
let cardsWon = []

//Check Match
function checkMatch(){
    const cards = document.querySelectorAll('img');
    let optionId1 = chosenCardsId[0];
    let optionId2 = chosenCardsId[1];

    //same card clicked twice
    if(optionId1 == optionId2){
        cards[optionId1].setAttribute('src', 'images/doctor.png');
        cards[optionId2].setAttribute('src', 'images/doctor.png');
        alert('You clicked the same card twice!')
    }

    //To check win positive
    if(chosenCards[0] === chosenCards[1]){
        cards[optionId1].setAttribute('src', 'images/yoda.jpeg');
        cards[optionId2].setAttribute('src', 'images/yoda.jpeg');
        cards[optionId1].removeEventListener('click', flipCard);
        cards[optionId2].removeEventListener('click', flipCard);
        cardsWon.push(chosenCards)
        result.textContent = cardsWon.length;
        alert('You have found a Match!');
    } else {
        cards[optionId1].setAttribute('src', 'images/doctor.png');
        cards[optionId2].setAttribute('src', 'images/doctor.png');
        setTimeout(alert('Sorry! Try Again!'), 500)
    }
    chosenCards = [];
    chosenCardsId = [];
    //Final Victory
    if(cardsWon.length == cardArray.length/2){
        result.textContent = 'Congratulations!'
    }
    //Reset in case of failure or next
   
}

//Function to flip cards on click
function flipCard(){
    const cardId = this.getAttribute('data-id');
    chosenCards.push(cardArray[cardId].name);
    chosenCardsId.push(cardId);
    console.log(chosenCards + chosenCardsId);
    this.setAttribute('src', cardArray[cardId].img);
//check match after some time and length==2
    if(chosenCards.length == 2){
        setTimeout(checkMatch(), 500);
    }
}