console.log("js file started");
    let playTurn = document.getElementsByClassName("message")[0];
    let addButton = document.getElementById("addPlayer");
    
    // playerTurn.innerHTML=`${}, you're up`;
    console.log(addButton,playTurn);
    addButton.addEventListener('click',addButton);
    function addPlayer(){
        let play1 = document.getElementById("player-1").value;
        let play2 = document.getElementById("player-2").value;
        console.log(play1,play2);
        // Validation
        // if(!play1||play2){}
    }

    // function playerTurn(){
    //   let name = document.createElement("div");
    //   name.className = 'message';
      
    //   name.innerHTML = `${player-1},you're up`;
    // }
    // playerTurn();

    // player name interchange

    let entername = "";
document.getElementById("addPlayer").addEventListener('click', () => {
  let play1 = document.getElementById("player-1").value;
  let play2 = document.getElementById("player-2").value;
  console.log(play1, play2);
 
  if (play1.trim() !== "") {
    let page1 = document.querySelector(".container");
    let page2 = document.querySelector(".container1");
    page1.style.display = 'none';
    page2.style.display = 'block';
    console.log(page1, page2);
    document.querySelector(".message").innerHTML = `${play1}, you're up`;
  }
  else if (play2.trim() !== "") {
    let page1 = document.querySelector(".container");
    let page2 = document.querySelector(".container1");
    page1.style.display = 'none';
    page2.style.display = 'block';
    console.log(page1, page2);
    document.querySelector(".message").innerHTML = `${play2}, you're up`;
  }
});

// Swap the player to the other one for the next turn
let player1 = "X";
if (player1 === "X")
  player2 = "O"
else
  player1 = "X"

let tableData = document.getElementById("board");

for(let i=1;i<=9;i++){
  tableData.addEventListener("click", ()=> {
    // Display either "X" or "O" in the board
    // if(){

    // }
  }
)};