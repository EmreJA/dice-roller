var eleDice = document.getElementById('dice');
var attImg = document.getElementById('diceImage');

function rollit() {
    var dice = Math.ceil(Math.random() * 6);
    if (dice == 1) {
      eleDice.innerHTML = 'One';
      attImg.setAttribute('src','img/dice1.svg');
    } else if (dice == 2){
      eleDice.innerHTML = 'Two';
      attImg.setAttribute('src','img/dice2.svg');
    } else if (dice == 3){
      eleDice.innerHTML = 'Three';
      attImg.setAttribute('src','img/dice3.svg');
    } else if (dice == 4){
      eleDice.innerHTML = 'Four';
      attImg.setAttribute('src','img/dice4.svg');
    } else if (dice == 5){
      eleDice.innerHTML = 'Five';
      attImg.setAttribute('src','img/dice5.svg');
    } else {
      eleDice.innerHTML = 'Six';
      attImg.setAttribute('src','img/dice6.svg');
    }
}

document.getElementById('roll').addEventListener('click', rollit);
