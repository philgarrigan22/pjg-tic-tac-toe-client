'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

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
  event.preventDefault()

  const id = $(event.target).data().cellIndex
  store.id = id

  api.newMove(store.id, store.player, store.over)
    .then(ui.newMoveSuccess(id))
    .catch(ui.newMoveFailure)

  console.log('this is the store ')
  console.log(store)
}

module.exports = {
  onCreateGame,
  onNewMove,
  onShowGames
}
