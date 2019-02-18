'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const gameLogic = require('./gamelogic.js')

const onCreateGame = event => {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)

  console.log(store.game)
}

const onShowGames = event => {
  event.preventDefault()

  api.showGames()
    .then(ui.showGamesSuccess)
    .catch(ui.showGamesFailure)
}

const onNewMove = (event) => {
  console.log('events.js onNewMove is invoked')
  console.log('this is the event target ' + event.target)
  event.preventDefault()

  const id = $(event.target).data().cellIndex
  store.id = id
  // we want to run the api function newMove, and give it
  api.newMove(store.id, store.player, store.over)
    .then(ui.newMoveSucess(id))
  // .catch(ui.newMoveFailure)
  // then we want to run the ui function newMoveSuccess or newMoveFailure
  // We also want to run our game logic functions to determine if game is won, switch players, and update the board
  console.log(store)

  console.log('this is the event target ' + event.target)
}

module.exports = {
  onCreateGame,
  onNewMove,
  onShowGames
}
