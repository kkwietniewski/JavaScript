const gameSummary = {
  numbers:0,
  wins:0,
  losses:0,
  draws:0
}

const game = {
  playerHand: "",
  aiHand: ""
}

const hands = [...document.querySelectorAll(".select img")];
const results = document.querySelectorAll(".panel-left span");

//Wybór dłoni
function handSelection(){
  game.playerHand = this.dataset.option;
  hands.forEach(hand => hand.style.boxShadow = "");
  this.style.boxShadow = "0 0 0 4px red";
}

//Wybór komputera
function aiChoice(){
  const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
  return aiHand;
}

//funkcja sprawdzająca wygraną
function checkResult(){
  if(game.playerHand === game.aiHand) return "draw";
  else if(game.playerHand === "papier" && game.aiHand === "kamień"
  || game.playerHand === "kamień" && game.aiHand === "nożyce"
  || game.playerHand === "nożyce" && game.aiHand === "papier") return "playerWin";
  else return "aiWin";
}

//Publikacja wyniku
function publishResult(gameResults){
  document.querySelector(".numbers span").textContent = ++gameSummary.numbers;

  results.forEach(result=>{
    if(result.dataset.summary === "your-choice") result.textContent = game.playerHand; 
    else if(result.dataset.summary === "ai-choice") result.textContent = game.aiHand; 
    else {
      if(gameResults == "draw") {
        result.style.color = "#716e6e";
        result.textContent = "Remis"

        document.querySelector(".draws span").textContent = ++gameSummary.draws;
      }
      else if(gameResults == "playerWin"){
        result.style.color = "green";
        result.textContent = "Wygrał Gracz!";

        document.querySelector(".wins span").textContent = ++gameSummary.wins;
      }
      else {
        result.style.color = "red";
        result.textContent = "Wygrał Komputer!";

        document.querySelector(".losses span").textContent = ++gameSummary.losses;
      }
    }
  });
}

function endGame(){
  document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
  game.playerHand = "";
  game.aiHand = "";
}

//funkcja sterująca
function startGame(){
  if(!game.playerHand) return alert("Wybierz dłoń!");
  
  game.aiHand = aiChoice();
  const gameResults = checkResult();
  publishResult(gameResults);
  endGame();
}
hands.forEach(hand=>hand.addEventListener("click", handSelection));

document.querySelector(".start").addEventListener("click", startGame);