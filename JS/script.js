let currentPlayer;
let winner;
let selections;
const players = {
    '1': {
        name: 'Player 1',
        symbol: 'X'
    },
    '-1': {
        name: 'Player 2',
        symbol: 'O'
    }
};
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

startGame();

function startGame() {
    currentPlayer = 1
    winner = null;
    selections = [0, 0, 0, 0, 0, 0, 0, 0, 0]//orginall  filled with "" used 0 and 1's to be able to do math when deciging a winner
}



function handleSquareClick(boxNumber) {
    let index = parseInt(boxNumber) - 1;//changes box 1 to 0 to fit into array
    if (winner != null) {
        alert('Game Over Please Reset')//check if someone has won
    } else if(selections[index] === 0) {//does not allow double click
        selections[index] = currentPlayer;//click inserts index in selections array
        console.log(selections)
        let box = 'box' + boxNumber //check which box is clicked
        console.log(box)
        document.getElementById(box).innerHTML = players[currentPlayer.toString()].symbol
        checkWinner();//places symbol in box
        currentPlayer *= -1//changes player
    } else {
        alert("That box is selectd DUMMY!")//makes so if box is filled alert will not allow new symbol
    } 

}

function checkWinner() {
    winningCombos.forEach(function(combo) {
        let comboNumber = selections[combo[0]] + selections[combo[1]] + selections[combo[2]]//needs 3 or -3 to win
      
        //if any combo = abs.(3) then = winner Math.abs(selections[combo[0]] + selections[combo[1]] + selections[combo[2]])
        //if any combo = 3 = winning player1
        //if any combo = -3 = winnong player2
        //alert winner + winnig player
        if(Math.abs(comboNumber) == 3) {
            if(comboNumber > 0) {
                //Player 1 wins
                document.querySelector('h2').innerHTML =  'Player 1 wins'
                console.log('the combonumber', comboNumber)
            } else if(comboNumber < 0) {
                //Player 2 wins
                document.querySelector('h2').innerHTML =  'Player 2 wins'
                console.log('the combonumber', comboNumber)
            } 
            winner = true
        } 

    })
    if(!selections.includes(0) && winner == null) {
        document.querySelector('h2').innerHTML =  'Tie Game'//if no 0's in selections array and no winner = tie
    }

}
function reloadGame(){
    location.reload();
}




//box1.addEventListener('click', whatever fx)
//box2.addEventListener('click', whatever fx)
//document.querySelector('table').addEventListener('click', handleMove);

//document.querySelector('button').addEventListener('click', initialize);
// //const box1 = document.getElementById("box1");
// //const box2 = document.getElementById("box2");
// //const box3 = document.getElementById("box3");
// const box4 = document.getElementById("box4");
// const box5 = document.getElementById("box5");
// const box6 = document.getElementById("box6");
// const box7 = document.getElementById("box7");
// const box8 = document.getElementById("box8");
// const box9 = document.getElementById("box9");
//const squares = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
//squares.forEach(function(box){
    //console.log(box);
    //box.addEventListener('click', handleSquareClick);
//}) 
//will define a fx
