'use strict'
const store = require('../store.js')
const gameLogic = require('./gamelogic.js')
const gameActions = require('./game-actions.js')

// Display new game created message, then reset form fields. Display who's
// turn it is and empty board for when new games are started.
const createGameSuccess = (gameData) => {
  gameActions.setGameBoard(gameData)
  gameActions.temporaryMessage('#user-message', 'New Game Successfully Created')
  $(`form`).trigger(`reset`)
  $('#game-message').html(`<h3> Player ${store.player}'s turn. </h3>`)
  $('.box').empty()
  // show game board once new game is started.
  $('.game-board').removeClass('hidden')
  $('#game-message').removeClass('hidden')
  $('#win-message').html('')
}

// Display error message, then reset form fields.
const createGameFailure = () => {
  gameActions.temporaryMessage('#user-message', 'Unable to create new game.')
  $(`form`).trigger(`reset`)
}

// Display message, reset form fields, then show amount of games played.
const showGamesSuccess = (responseData) => {
  console.log(responseData)
  gameActions.temporaryMessage('#user-message', 'Successfully accesed past games.')
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
  $('.game-stats').removeClass('hidden')
  // })
}

// Display error message, then reset form fields.
const showGamesFailure = () => {
  gameActions.temporaryMessage('#user-message', 'Unable to show games.')
  $(`form`).trigger(`reset`)
}

// Check if game state is over. If it is, display game over message and stop
// running function. If game not over, check if the cell being clicked on is
// already filled. If cell is already filled, display misclick message and
// stop running the function. If cell not already filled check which player
// is making the move. Then add that player (x or o) text to the cell being clicked.
const newMoveSuccess = (id) => {
  console.log('new move success is being invoked')
  console.log(id)
  if (store.over) {
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
  gameActions.gameBoard()
  gameActions.changeTurn(store.player)
  gameLogic.winConditions(store.cells)
  // Check if winner is defined. If so, display 'game over' message.
  gameActions.checkGameOver()
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  showGamesSuccess,
  showGamesFailure,
  newMoveSuccess
  // newMoveFailure
}
