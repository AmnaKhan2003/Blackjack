
let hasBlackJack=false;
let isAlive=false;
let message="";
let sum=0;
let messageEl=document.querySelector("#message-el");
let sumEL=document.getElementById("sum-el");
let cardsEL=document.getElementById("card-el");;
let cards=[];
let player={
    name:"Amna",
    chips:145,
}

let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+": $"+player.chips;
function getRandomCard(){
    let data=Math.floor(Math.random()*13)+1;
    if(data===1){
        data=11;
    }
    else if(data>=11 && data<=13){
        data=10;
    }
    return data;
}
function startGame(){
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    sum=firstCard+secondCard;
    cards=[firstCard,secondCard];
    renderGame();
}
function renderGame(){
cardsEL.textContent="Cards: ";
for(let i=0;i<cards.length;i++){
    cardsEL.textContent+=cards[i]+" ";
}
sumEL.textContent="Sum: "+sum;
    if(sum<=21){

        message="Do you want to draw a new card?";
    }
    else if(sum===21){
        message="Wohooo! You've got Blackjack!";
        hasBlackJack=true;
    }
    else{
        message="You're out of the game!";
        isAlive=false;
    }
    messageEl.textContent=message;
}
function newCard(){
    if(isAlive===true && hasBlackJack===false){
   let card=getRandomCard();
   sum+=card;
   cards.push(card);
   renderGame();
    }
}









