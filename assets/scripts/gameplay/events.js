'use strict'
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = event => {
  event.preventDefault()
  console.log('ONcreate game is invoked')

  api.createGame()

    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onNewMove = () => {
  console.log('Test Click')
}

module.exports = {
  onCreateGame,
  onNewMove
}
