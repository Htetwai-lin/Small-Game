/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//necessary variable declaration
var score , roundScore, activePlayer,dice,gamePlaying;
//call init function
init();

var diceDOM = document.querySelector('.dice');

diceDOM.style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent ='0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent ='0';

//When you play the ROLL DICE btn 
document.querySelector('.btn-roll').addEventListener('click',function(){
	//using state variable
	if(gamePlaying){
	//random number to dice
		dice = Math.floor(Math.random() * 6) +1;
		//display the result
		diceDOM.style.display = 'block';
		//set the image by rolling dice to show the display
		diceDOM.src = 'dice-'+dice+'.png';
		if(dice>1){
			//adding the score to Current score
			roundScore += dice;
			//set the current score to show display
			document.querySelector('#current-'+activePlayer).textContent = roundScore;
		}else{
			//chain to next player
			changePlayer();
		} 	
	}
		

})

document.querySelector('.btn-hold').addEventListener('click',function(){
			//using state variable
		if(gamePlaying){
			//adding the current soure to the global score
			score [activePlayer] += roundScore;
			//set the global score to show the display
			document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
			//You will win when score is 100 and above 
			if(score[activePlayer]>= 100){
				//using state variable
				gamePlaying = false;
				//set the "Winner !" to display win player.
				document.querySelector('#name-'+activePlayer).textContent = "Winner !";
				diceDOM.style.display = 'none';
				document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
				document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			}else{
				//change to next player
				changePlayer(); 
			}
		} 
})

document.querySelector('.btn-new').addEventListener('click',init)

function init(){
	gamePlaying = true;
	score = [0,0];
	roundScore = 0;
	activePlayer = 0; 
	document.querySelector('.dice').textContent = 'none';
	document.getElementById('score-0').textContent ='0';
	document.getElementById('score-1').textContent ='0';
	document.getElementById('current-0').textContent ='0';
	document.getElementById('current-1').textContent ='0';
	document.getElementById('name-0').textContent ='Player 1';
	document.getElementById('name-1').textContent ='Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

}

function changePlayer(){

	activePlayer === 0? activePlayer = 1: activePlayer = 0;
			roundScore = 0;
			document.getElementById('current-0').textContent ='0';
			document.getElementById('current-1').textContent ='0';
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
			diceDOM.style.display = 'none';

}
