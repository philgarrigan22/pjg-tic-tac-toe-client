'use strict'
const store = require('../store.js')
const gameLogic = require('./gamelogic.js')
const gameActions = require('./game-actions.js')

const createGameSuccess = (gameData) => {
  // begin new game with blank board, other game info from API rrequest, and start player as 'x'
  gameActions.setGameBoard(gameData)
  // Display new game created message, then reset form fields
  gameActions.temporaryMessage('#user-message', 'New Game Successfully Created')
  $(`form`).trigger(`reset`)
  // Display who's turn it is / empty board
  $('#game-message').html(`<h3> Player ${store.player}'s turn. </h3>`)
  $('.box').empty()
}

const createGameFailure = () => {
  // Display error message, then reset form fields
  gameActions.temporaryMessage('#user-message', 'Unable to create new game.')
  $(`form`).trigger(`reset`)
}

const showGamesSuccess = (responseData) => {
  gameActions.temporaryMessage('#user-message', 'Successfully accesed past games.')
  // Below resets form fields
  $(`form`).trigger(`reset`)

  // // code below pulls up listing of all game data played, but does not show
  // // actual game board moves made.
  // responseData.games.forEach(games => {
  // const exampleHtml = (`
  // <p>ID: ${games.id}</p>
  // <p>Gameboard: ${games.cells}</p>
  // <p>Gameover?: ${games.over}</p>
  // <br>
  // `)

  $('#show-games-list').html(`You have played ${responseData.games.length} total games`)
  // })
}

const showGamesFailure = () => {
  gameActions.temporaryMessage('#user-message', 'Unable to show games.')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

const newMoveSuccess = (id) => {
//   if (store.player === 'x' && store.over === false && store.cells === '') {
  console.log('new move success is being invoked')

  if (store.over) {
    $('#game-message').html('<h3>Game Over</h3>')
    return
  }

  if (store.cells[store.id]) {
    $('#game-message').html('Misclicked')
    return
  }

  if (store.player === 'x') {
    $(event.target).text('X')
  } else if (store.player === 'o') {
    $(event.target).text('O')
  }

  gameLogic.gameBoard()
  gameLogic.changeTurn(store.player)
  gameLogic.winConditions(store.cells)

  if (store.winner) {
    $('#game-message').html('<h3>Game Over</h3>')
  } else {
    $('#game-message').html(`<h3>Player ${store.player}'s turn.</h3>`)
  }
  // check if the game is over

  // check if the gameplay box is occuppied or not

  // if (store.invalid) { $('#game-message').html('Misclicked') }

  // below code works and places x or o on the board, based on the turn. However,
  // this does not successfully stop if game is over or space is already filled.
}

// $(event.target).text(store.player)

//   }
// }
//
// const newMoveFailure = () => {
//   console.log('newMoveFailure is invoked')
// }

module.exports = {
  createGameSuccess,
  createGameFailure,
  showGamesSuccess,
  showGamesFailure,
  newMoveSuccess
  // newMoveFailure
}
