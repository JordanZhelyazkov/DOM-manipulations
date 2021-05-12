function solve() {

   let currentCard1Player = false;
   let currentCard2Player = false;
   let max = Number.MIN_SAFE_INTEGER;
   let player1cards = document.querySelector('#player1Div');
   let firstCardSave = '';
   let hirsoryDiv = document.getElementById('history');
   
      player1cards.addEventListener('click', (event) => {
         if(document.querySelectorAll('span')[0].textContent != '' &&
         document.querySelectorAll('span')[2].textContent != ''){
            document.querySelectorAll('span')[0].textContent = '';
         document.querySelectorAll('span')[2].textContent = '';
         }
         let firstSpan = document.querySelectorAll('span')[0];
         event.target.src = 'images/whiteCard.jpg';
         firstSpan.textContent = event.target.getAttribute('name');
         currentCard1Player = true;
         let value = Number(event.target.getAttribute('name'));
         firstCardSave = event.target;
         if(value > max){
            max = value;
         }
        
      })
      
   
   let player2cards = document.querySelector('#player2Div');
   
      player2cards.addEventListener('click', (event) => {
         let secondSpan = document.querySelectorAll('span')[2];
         event.target.src = 'images/whiteCard.jpg';
         secondSpan.textContent = event.target.getAttribute('name');
         currentCard2Player = true;
         let valueSecond = +event.target.getAttribute('name');
        if(currentCard1Player && currentCard2Player){
         let topCard = 0;
         let looseCard = 0;
           if(max > valueSecond){
              topCard = +firstCardSave.getAttribute('name');
              looseCard = +event.target.getAttribute('name');
              event.target.style.border = '2px solid red'
              firstCardSave.style.border = '2px solid green';
           } else if(valueSecond > max){
            topCard = +event.target.getAttribute('name');
            looseCard = +firstCardSave.getAttribute('name');
              event.target.style.border = '2px solid green';
              firstCardSave.style.border = '2px solid red'
           }
         hirsoryDiv.textContent += `[${topCard} vs ${looseCard}]` + ' ';
        }
      })
      
   

   
}


















































// let player1 = document.getElementById('player1Div');
// let player2 = document.getElementById('player2Div');
// let player1clicked = false;
// let player2clicked = false;
// let max = Number.MIN_SAFE_INTEGER;
// player1.addEventListener('click', function (e) {
//    e.target.src = 'images/whiteCard.jpg';
//    let valueCard = Number(e.target.getAttribute('name'));
//    MAX = valueCard;
//    player1clicked = true;
// });
// player2.addEventListener('click', function (e) {
//    e.target.src = 'images/whiteCard.jpg';
//    let valueCard2 = Number(e.target.getAttribute('name'));
//    player2clicked = true;
//    if (player1clicked && player2clicked) {
//       if (max > valueCard2) {

//       }

//    }
// })
