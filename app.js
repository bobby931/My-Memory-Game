
//Create an array of image objects 
const cardArray = [
{
    name: 'fries', 
    img: 'images/fries.png',
},
{
    name: 'cheeseburger', 
    img: 'images/cheeseburger.png',
},
{
    name: 'hotdog', 
    img: 'images/hotdog.png',
},
{
    name: 'ice-cream', 
    img: 'images/ice-cream.png',
},
{
    name: 'milkshake', 
    img: 'images/milkshake.png',
},
{
    name: 'pizza', 
    img: 'images/pizza.png',
},



{
    name: 'fries', 
    img: 'images/fries.png',
},
{
    name: 'cheeseburger', 
    img: 'images/cheeseburger.png',
},
{
    name: 'hotdog', 
    img: 'images/hotdog.png',
},
{
    name: 'ice-cream', 
    img: 'images/ice-cream.png',
},
{
    name: 'milkshake', 
    img: 'images/milkshake.png',
},
{
    name: 'pizza', 
    img: 'images/pizza.png',
},



]

cardArray.sort(() => 0.5 - Math.random()) //sort array randomly each game


const griddisplay = document.querySelector('#grid') //looks for grid div in html
const resultDisplay = document.querySelector('#result') //look for result div in html
let cardsChosen = [] //array of chosen cards, initially set to empty
let cardsChosenIds = []
const cardsWon = []


function createBoard(){  //create board function

    for (let i = 0; i<cardArray.length; i++){ //iterate length of cardarray
        const card = document.createElement('img') //JS method allowing to create image element
        card.setAttribute('src', 'images/blank.png') //set each card to appear faced-down initally
        card.setAttribute('data-id', i )
        card.addEventListener('click', flipCard) //if there is a click, flipcard function executed
        griddisplay.appendChild(card)

    }


}
createBoard() //calls function


function checkMatch(){
  const cards =  document.querySelectorAll('img') //searching for every image in document
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]

  if(optionOneId == optionTwoId){ //if you click the same image for both chosen cards
    alert("you have clicked the same image")
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
  }


    if(cardsChosen[0] == cardsChosen[1] && (optionOneId != optionTwoId)){ //if images match, set both cards as white
        alert('You Found a Match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard) //now clicking on card as no effect or flip
        cards[optionTwoId].removeEventListener('click', flipCard) //now clicking on card as no effect or fip
        cardsWon.push(cardsChosen)
    }


    //if not match then, turn the cards back down
    else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert("Sorry, Try Again!")
    }

    resultDisplay.textContent = cardsWon.length


    cardsChosen = [] //clear for next guess
    cardsChosenIds = [] //clear for next guess


    //if you matched all the cards
    if(cardsWon.length == cardArray.length/2) {//if 12 cards, you can only get 6 matches, which is why we divide by 2
        resultDisplay.innerHTML = "Congratulations, you found all the matches!"
    }



}


function flipCard(){ //flip card function when you click on it 

    const cardid = this.getAttribute('data-id') //assign card number clicked to cardid, thanks to 'this'
    cardsChosen.push(cardArray[cardid].name) //push chosen card into cardsChosen Array
    cardsChosenIds.push(cardid)
    console.log('clicked', cardid)
    this.setAttribute('src', cardArray[cardid].img) //when you click on card, it flips to hidden image

    if(cardsChosen.length ===2){
        setTimeout(checkMatch, 500) //setTimeout calls checkMatch of card after 500ms
    }

}





console.log(griddisplay)