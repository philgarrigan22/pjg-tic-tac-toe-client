'use strict'

const store = require('../store.js')

const setGameBoard = (gameData) => {
  store.over = gameData.game.over
  store.gameID = gameData.game.id
  store.cells = gameData.game.cells
  store.player = 'x'
  store.winner = ''
}

module.exports = {
  setGameBoard
}
