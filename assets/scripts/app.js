'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gameEvents = require('./gameplay/events.js')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#new-game-button').on('click', gameEvents.onCreateGame)
  $('#get-games-button').on('click', gameEvents.onShowGames)
  $('.box').on('click', gameEvents.onNewMove)
  $('.sign-up-toggle').on('click', authEvents.onSignUpToggle)
  $('.sign-up-cancel-toggle').on('click', authEvents.onSignUpCancel)
})
