var scores, roundScore, activePlayer, dice, gamePlaying, lastDice;
init();

function init(){
    //reseting score variables
    scores = [0 ,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    //reseting scores of players
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //reseting names of players
    document.getElementById('name-0').innerHTML = ' <input type = "text" name = "Player 1" placeholder = "Player 1">';
    document.getElementById('name-1').innerHTML = ' <input type = "text" name = "Player 2" placeholder = "Player 2">';
    //removing classes from the player panels
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}
//roll button
document.querySelector('.btn-roll').addEventListener('click', function() {
        if(gamePlaying) {
        //random number
        var dice1 = Math.floor(Math.random()*6)+1;
        var dice2 = Math.floor(Math.random()*6)+1;
        //display dice image based on a random number
        var diceDOM1 = document.getElementById('dice-1');
        var diceDOM2 = document.getElementById('dice-2');
        diceDOM1.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM1.src = 'dice' + dice1 + '.png';
        diceDOM2.src = 'dice'+ dice2 + '.png';
        //update the round score if the rolled number was not 1
        if (dice1 !== 1 && dice2 !== 1) {
            //add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            //next player
            nextPlayer();
        }
    }
});
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        //add current score to global scroe
        scores[activePlayer] += roundScore;
        //update the user interface
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        var input = document.querySelector('.final-score').value;
        var winningScore;
        //undefined,0,null or "" false
        if(input) {
            winningScore = input;
        }
        else {
            winningScore = 100;
        }
        //check if player won the game
        if(scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
            //next player
            nextPlayer();
        }
    }
});
// new game button
document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer(){
     //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = roundScore;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('#dice-1').style.display='none';
    document.getElementById('#dice-2').style.display='none';
}