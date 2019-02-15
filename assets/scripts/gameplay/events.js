'use strict'
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = event => {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onShowGames = event => {
  event.preventDefault()

  api.showGames()
    .then(ui.showGamesSuccess)
    .catch(ui.showGamesFailure)
}

const onNewMove = () => {
  console.log('Test Click')
}

module.exports = {
  onCreateGame,
  onNewMove,
  onShowGames
}
