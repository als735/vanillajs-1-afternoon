let board = []; 
let hasWon = false; 

const play = (val) => {
    const player = document.getElementById('player'); 
    const element = document.getElementById(val); 

    if (element.innerText === ''){ 
        if (player.innerText === 'X') {
            player.innerText = 'O'; //whose turn it is next 
            element.innerText = 'X'  // what to put down on the table 
            board[val] = 'X'  // assgingin X to the array index (nothing to do with the html/its just for the logics below) 
        } else {
            player.innerText = 'X'; 
            element.innerText = 'O' 
            board[val] = 'O'
        }
    }
        
        let sq1 = board[0]; // top row 
        let sq2 = board[1]; // top row 
        let sq3 = board[2]; // top row 
        let sq4 = board[3]; // middle row
        let sq5 = board[4]; // middle row
        let sq6 = board[5]; // middle row
        let sq7 = board[6]; // bottom row
        let sq8 = board[7]; // bottom row
        let sq9 = board[8]; // bottom row


        if (hasWon === true){ 
            return 
        } else if (sq1 !== undefined && sq1 === sq2 && sq1 === sq3) {
        window.alert(`${sq1} is the winner`);
        hasWon = true; 
        return
      } else if (sq4 !== undefined && sq4 === sq5 && sq4 === sq6) {
        window.alert(`${sq4} is the winner`);
        hasWon = true; 
        return
      } else if (sq7 !== undefined && sq7 === sq8 && sq7 === board[8]) {
        window.alert(`${sq7} is the winner`);
        hasWon = true; 
        return
      } else if (sq1 !== undefined && sq1 === sq4 && sq1 === sq7) {
        window.alert(`${sq1} is the winner`);
        hasWon = true; 
        return
      } else if (sq2 !== undefined && sq2 === sq5 && sq2 === sq8) {
        window.alert(`${sq2} is the winner`);
        hasWon = true; 
        return
      } else if (sq3 !== undefined && sq3 === sq6 && sq3 === board[8]) {
        window.alert(`${sq3} is the winner`);
        hasWon = true; 
        return
      } else if (sq1 !== undefined && sq1 === sq5 && sq1 === board[8]) {
        window.alert(`${sq1} is the winner`);
        hasWon = true; 
        return
      } else if (sq7 !== undefined && sq7 === sq5 && sq7 === sq3) {
        window.alert(`${sq7} is the winner`);
        hasWon = true; 
        return
      }

      let boardFull = true;  
      for (let i = 0; i <= 8; i++){
          if(board[i] === undefined){
              boardFull = false; 
          }
        } 
        if(boardFull === true){
            window.alert("Cat's game, there is no winner")
            hasWon = true;
        }

// iterate over the array previously created (for loop)
// is there a winner? (if statement)
    // 
// display the winner (alert)
//

}; 

const afterTheWinnerIsRevealed = () => {
    for (var i = 0; i <= 8; i++){
    document.getElementById(i).innerText = '';
    board[i] = ''; 
    } 
    hasWon = true; 
    document.getElementById('player').innerText = 'X'; 
}















