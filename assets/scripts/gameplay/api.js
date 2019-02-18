const config = require('../config.js')
const store = require('../store.js')

const createGame = () => {
  console.log('create game is invoked')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    contentType: 'application/json',
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
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: JSON.stringify(gameData)
  })
}

const newMove = (index, value, over) => {
  console.log('API newMove is invoked')
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameID,
    method: 'PATCH',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: JSON.stringify({
      'game': {
        'cells': {
          'index': index,
          'value': value
        },
        'over': over
      }
    })
  })
}

module.exports = {
  createGame,
  showGames,
  newMove
}
