'use strict'
// const store = require('../store.js')

const temporaryMessage = function (selector, text) {
  $(selector).text(text)
  setTimeout(() => $(selector).text(''), 3000)
}

const createGameSuccess = () => {
  console.log('creategame success is invoked')

  temporaryMessage('#game-message', 'New Game Successfully Created')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

const createGameFailure = () => {
  temporaryMessage('#game-message', 'Unable to create new game.')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
