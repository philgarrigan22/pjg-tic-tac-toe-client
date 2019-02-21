const store = require('../store.js')

// Checks if the array has the winning/draw conditions
const winConditions = (boardSpace) => {
  // console.log('gamelogic winConditions is invoked')
  // check for X win
  if (
    (boardSpace[0] === 'x' && boardSpace[1] === 'x' && boardSpace[2] === 'x') ||
    (boardSpace[3] === 'x' && boardSpace[4] === 'x' && boardSpace[5] === 'x') ||
    (boardSpace[6] === 'x' && boardSpace[7] === 'x' && boardSpace[8] === 'x') ||
    (boardSpace[0] === 'x' && boardSpace[3] === 'x' && boardSpace[6] === 'x') ||
    (boardSpace[1] === 'x' && boardSpace[4] === 'x' && boardSpace[7] === 'x') ||
    (boardSpace[2] === 'x' && boardSpace[5] === 'x' && boardSpace[8] === 'x') ||
    (boardSpace[0] === 'x' && boardSpace[4] === 'x' && boardSpace[8] === 'x') ||
    (boardSpace[2] === 'x' && boardSpace[4] === 'x' && boardSpace[6] === 'x')
  ) {
    // console.log('Player X wins!')
    $('#win-message').html('Player X wins')

    // if 'x' win, store the game state as over, the player as x, the winner as
    // user 'x' add 1 to the xwins counter, and display winner 'X' message.
    store.over = true
    store.player = 'x'
    store.winner = 'x'
    store.xwins += 1

    // Check for 'O' wins
  } else if (
    (boardSpace[0] === 'o' && boardSpace[1] === 'o' && boardSpace[2] === 'o') ||
  (boardSpace[3] === 'o' && boardSpace[4] === 'o' && boardSpace[5] === 'o') ||
  (boardSpace[6] === 'o' && boardSpace[7] === 'o' && boardSpace[8] === 'o') ||
  (boardSpace[0] === 'o' && boardSpace[3] === 'o' && boardSpace[6] === 'o') ||
  (boardSpace[1] === 'o' && boardSpace[4] === 'o' && boardSpace[7] === 'o') ||
  (boardSpace[2] === 'o' && boardSpace[5] === 'o' && boardSpace[8] === 'o') ||
  (boardSpace[0] === 'o' && boardSpace[4] === 'o' && boardSpace[8] === 'o') ||
  (boardSpace[2] === 'o' && boardSpace[4] === 'o' && boardSpace[6] === 'o')
  ) {
    // console.log('Player O wins!')
    $('#win-message').html('Player O wins')
    // if 'o' win, store the game state as over, the player as x, the winner as
    // user 'o', add 1 to the owins counter, and display winner 'O' message.
    store.over = true
    store.player = 'x'
    store.winner = 'o'
    store.owins += 1

    // if neither 'x' or 'o' wins, check game for draw
  } else if (
    (boardSpace[0] !== '' && boardSpace[1] !== '' && boardSpace[2] !== '' &&
    boardSpace[3] !== '' && boardSpace[4] !== '' && boardSpace[5] !== '' &&
    boardSpace[6] !== '' && boardSpace[7] !== '' && boardSpace[8] !== '')
  ) {
    // console.log('Tie game')
    $('#win-message').html(`It's a draw!`)

    // if game is a draw, store the game state as over, the player as x, the
    // winner as 'draw', and display game is a draw message.
    store.over = true
    store.player = 'x'
    store.winner = 'draw'
  }
}

// winConditions(gameBoard)

module.exports = {
  winConditions
}
