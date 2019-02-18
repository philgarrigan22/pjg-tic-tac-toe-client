'use strict'
const store = require('../store.js')
const gameActions = require('../gameplay/game-actions.js')

const signUpSuccess = () => {
  gameActions.temporaryMessage('#user-message', 'Successfully Created User')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

const signInSuccess = (responseData) => {
  gameActions.temporaryMessage('#user-message', 'Successfully Signed in')
  // save the token
  store.user = responseData.user
  // Below resets form fields
  $(`form`).trigger(`reset`)
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
