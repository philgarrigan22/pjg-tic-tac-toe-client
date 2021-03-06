'use strict'
const store = require('../store.js')
const gameActions = require('../gameplay/game-actions.js')

// Display success message, then reset form fields.
const signUpSuccess = () => {
  gameActions.temporaryMessage('#user-message', 'Successfully Created User')
  $(`form`).trigger(`reset`)
  $('#sign-up-box').addClass('hidden')
  $('#sign-in-box').removeClass('hidden')
}

// Display success message, save the user info to store, and reset form fields.
const signInSuccess = (responseData) => {
  gameActions.temporaryMessage('#user-message', 'Successfully Signed in')
  store.user = responseData.user
  $(`form`).trigger(`reset`)
  // Once signed in, display the change password, sign out, new game, and get
  // games features. Then hide the sign-up / sign-in buttons.
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#new-game-button').removeClass('hidden')
  $('#get-games-button').removeClass('hidden')
  $('.dropdown').removeClass('hidden')
  $('#sign-up-box').addClass('hidden')
  $('#sign-in-box').addClass('hidden')
}

// Used for both sign up and sign in failure. display success message, then reset form fields.
const signUpFailure = () => {
  gameActions.temporaryMessage('#user-message', 'Sign in error!!')
  $(`form`).trigger(`reset`)
}

// Display success message, then reset form fields.
const changePasswordSuccess = () => {
  gameActions.temporaryMessage('#user-message', store.user.email + ' successfully updated password!')
  $(`form`).trigger(`reset`)
}

// Display failure message, then reset form fields.
const changePasswordFailure = () => {
  gameActions.temporaryMessage('#user-message', 'Changed Password Failure')
  $(`form`).trigger(`reset`)
}

// Display success message, then reset form fields.
const signOutSuccess = () => {
  gameActions.temporaryMessage('#user-message', store.user.email + ' has successfully logged out!')
  $(`form`).trigger(`reset`)

  // Hide all logged-in content, show sign-in options
  $('#sign-in-box').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#new-game-button').addClass('hidden')
  $('#get-games-button').addClass('hidden')
  $('.dropdown').addClass('hidden')
  $('.game-board').addClass('hidden')
  $('.game-stats').addClass('hidden')
  $('#show-games-list').addClass('hidden')
  $('#game-message').addClass('hidden')
  $('#show-games-list').html('')
}

// Display failure message, then reset form fields.
const signOutFailure = () => {
  gameActions.temporaryMessage('#user-message', 'Sign out error!!')
  $(`form`).trigger(`reset`)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
