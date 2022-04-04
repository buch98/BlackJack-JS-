var cards = [];
var sum = 0;
var hasBlackJack = false;
var isAlive = false;
var message="";
var messageEl = document.getElementById('message')
var totalEl = document.querySelector("#total")
var cardEl = document.querySelector("#card")
var playerEl = document.querySelector("#player")

let player = {
    name:'Player',
    chips:150
}

playerEl.textContent = player.name+": $"+player.chips

function getRandomCard(){
    random_value = Math.floor(Math.random()*13)+1
    if (random_value>10){
        return 10
    }else if (random_value===1){
        let value = prompt("Please choose between 1 and 11:")
        if (value!=='1' || value!=='11'){
            alert("Incorrect input, default value 1")
            value=1
        }
        return parseInt(value)
    }
    else{
        return random_value
    }
}

function startGame(){
    isAlive=true;
    hasBlackJack=false;
    let firstCard = getRandomCard();
    let secondCard= getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame(){
    totalEl.textContent="Sum: "+sum
    cardEl.textContent="Cards: "+ cards
    if (sum<=20){
        message="Do you want to draw another card? 🤔"
    }
    else if (sum===21){
        message="You're the winner!!!😀"
        hasBlackJack = true;
        player.chips+=10;
        playerEl.textContent = player.name+": $"+player.chips
    }
    else {
        message="You loose the game!!😒"
        isAlive = false;
    }
    messageEl.textContent = message
}
function newCard(){
    if (isAlive===true && hasBlackJack===false) 
    {
        let card = getRandomCard() 
        sum+=card
        cards.push(card)
        renderGame()
    }
}


