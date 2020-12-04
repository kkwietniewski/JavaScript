const gameSummary = {
    numbers:0,
    wins:0,
    losses:0,
    draws:0,
}

const game = {
    playerHand: null,
    aiHand: null,
}

const hands = document.querySelectorAll('.select img');


function checkResult() {
    result = '';
    if(game.playerHand === game.aiHand) result = 'draw'
    else if(game.playerHand == 'papier' && game.aiHand == 'kamien' || 
    game.playerHand == 'kamien' && game.aiHand == 'nozyce' ||
    game.playerHand == 'nozyce' && game.aiHand == 'papier') result = 'win'
    else result = 'losse'

    return result;
}

function handSelection(){
    game.playerHand = this.dataset.option
    hands.forEach(hand => hand.style.boxShadow = '')
    this.style.boxShadow = '0 0 0 4px black'
}

function aiChoice(){  
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function publishResult(playerChoice, aiChoice, gameResult){
    document.querySelector('[data-summary="your-choice"]').textContent = playerChoice;
    document.querySelector('[data-summary="ai-choice"]').textContent = aiChoice;
    
    document.querySelector('.numbers span').textContent = ++gameSummary.numbers;

    const winner = document.querySelector('.panel-left h2 span')
    if(gameResult === 'win'){
        winner.textContent = 'Wygrałeś!'
        winner.style.color = 'green'
        document.querySelector('.wins span').textContent = ++gameSummary.wins
    }else if(gameResult === 'losse'){
        winner.textContent = 'Przegrałeś!'
        winner.style.color = 'red'
        document.querySelector('.losses span').textContent = ++gameSummary.losses
    }else{
        winner.textContent = 'Remis!'
        winner.style.color = '#403d3d'
        document.querySelector('.draws span').textContent = ++gameSummary.draws
    }
}

function endGame(){
    document.querySelector(`[data-option='${game.playerHand}']`).style.boxShadow = '';
    game.playerHand = '';
    game.aiHand = '';
}
function startGame(){
    if(!game.playerHand) return alert("Wybierz dłoń");

    game.aiHand = aiChoice();

    // console.log(game)
    const gameResult = checkResult();

    publishResult(game.playerHand, game.aiHand, gameResult);

    endGame();
}

hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame)