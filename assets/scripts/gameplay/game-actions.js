'use strict'
const store = require('../store.js')

// Sets the game board default values in the store at the start of a new game.
const setGameBoard = (gameData) => {
  store.over = gameData.game.over
  store.gameID = gameData.game.id
  store.cells = gameData.game.cells
  store.player = 'x'
  store.winner = ''
}

// Function to display temporaty message to whatever HTML area selected.
const temporaryMessage = (selector, text) => {
  $(selector).html(text)
  setTimeout(() => $(selector).html('<h3></h3>'), 3500)
}

// Check if winner is defined. If so, display 'game over' message.
const checkGameOver = () => {
  if (store.winner) {
    $('#game-message').html('<h3>Game Over</h3>')
  }
}

// Set game board to check if the game is over or not
// Check whether the clicked on cell value is empty. If it's empty, record
// the value of that cell as either 'X' or 'O' within the store.cells array of
// cells, based on player clicking. If cell isn't empty and has value of 'x' or
// 'o', then do nothing to the store.cells array.
const gameBoard = () => {
  console.log('gamelogic gameBoard is invoked')
  if (store.cells[store.id] === '') {
    store.cells[store.id] = store.player
  } else if (store.cells[store.id] === 'x' || 'o') {
  }
}

// Changes turn. Changes the value of the player within the store.player, then
// displays that player's turn as HTML.
const changeTurn = () => {
  console.log('gamelogic changeTurn is invoked')

  if (store.player === 'x') {
    store.player = 'o'
  } else {
    store.player = 'x'
  }
  $('#game-message').html(`<h3>Player ${store.player}'s turn</h3>`)
}

module.exports = {
  setGameBoard,
  temporaryMessage,
  checkGameOver,
  changeTurn,
  gameBoard
}
