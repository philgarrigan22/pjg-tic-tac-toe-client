'use strict'
const store = require('../store.js')
const gameActions = require('../gameplay/game-actions.js')

const signUpSuccess = () => {
  gameActions.temporaryMessage('#user-message', 'Successfully Created User')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

const signInSuccess = (responseData) => {
  // Display success message, save the user info to store, and reset form fields.
  gameActions.temporaryMessage('#user-message', 'Successfully Signed in')
  store.user = responseData.user
  $(`form`).trigger(`reset`)

  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#new-game-button').removeClass('hidden')
  $('#get-games-button').removeClass('hidden')
}

// Used for both sign up and sign in failure.
const signUpFailure = () => {
  gameActions.temporaryMessage('#user-message', 'Sign in error!!')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

const changePasswordSuccess = () => {
  gameActions.temporaryMessage('#user-message', store.user.email + ' successfully updated password!')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

const changePasswordFailure = () => {
  gameActions.temporaryMessage('#user-message', 'Changed Password Failure')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

const signOutSuccess = () => {
  gameActions.temporaryMessage('#user-message', store.user.email + ' has successfully logged out!')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

const signOutFailure = () => {
  gameActions.temporaryMessage('#user-message', 'Sign out error!!')
  // Below resets form fields
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
