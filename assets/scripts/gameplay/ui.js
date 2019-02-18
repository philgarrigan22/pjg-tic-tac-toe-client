'use strict'
const store = require('../store.js')
const gameLogic = require('./gamelogic.js')

const temporaryMessage = (selector, text) => {
  $(selector).html(text)
  setTimeout(() => $(selector).html(''), 3000)
}

const createGameSuccess = (gameData) => {
  console.log('creategame success is invoked')
  // begin new game with blank board, other game info from API rrequest, and start player as 'x'
  store.over = gameData.game.over
  store.gameID = gameData.game.id
  store.cells = gameData.game.cells
  store.player = 'x'

  // console.log('over is ' + store.over)
  // console.log('id is ' + id)
  // console.log('value is ' + value)
  // console.log(store)

  // Display new game created message
  temporaryMessage('#user-message', 'New Game Successfully Created')
  // Below resets form fields
  $(`form`).trigger(`reset`)
  // Display who's turn it is / check empty board
  $('#game-message').html(`<h3> Player ${store.player}'s turn. </h3>`)
  $('.box').empty()
}

const createGameFailure = () => {
  temporaryMessage('#user-message', 'Unable to create new game.')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

const showGamesSuccess = (responseData) => {
  temporaryMessage('#user-message', 'Successfully accesed past games.')
  // Below resets form fields
  $(`form`).trigger(`reset`)
  responseData.games.forEach(games => {
    const exampleHtml = (`
    <p>ID: ${games.id}</p>
    <p>Gameboard: ${games.cells}</p>
    <p>Gameover?: ${games.over}</p>
    <br>
    `)

    $('#show-games-list').append(exampleHtml)
  })
}

// const showGamesFailure = () => {
//   console.log('showGamesFailure is invoked')
// }
//
const newMoveSucess = (id) => {
//   if (store.player === 'x' && store.over === false && store.cells === '') {
  console.log('new move success is being invoked')

  // gameLogic.gameBoard(store.id, store.player)
  if (store.over) {
    $('#game-message').html('<h3>Game Over</h3>')
    return
  }
  if (store.cells[store.id]) {
    console.log('TEST FOR TEST')
    console.log(store.cells[store.id])
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
  // check if the game is over

  // check if the gameplay box is occuppied or not

  // if (store.invalid) { $('#game-message').html('Misclicked') }

  // below code works and places x or o on the board, based on the turn. However,
  // this does not successfully stop if game is over or space is already filled.

  $('#game-message').html(`<h3>Player ${store.player}'s turn.</h3>`)
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
  // showGamesFailure,
  newMoveSucess
  // newMoveFailure
}
