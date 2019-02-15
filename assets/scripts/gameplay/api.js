const config = require('../config.js')
const store = require('../store.js')

const createGame = () => {
  console.log('create game is invoked')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const showGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // contentType: 'application/json',
    // data: JSON.stringify(gameData)
  })
}

module.exports = {
  createGame,
  showGames
}
