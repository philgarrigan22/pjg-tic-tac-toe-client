'use strict'
const store = require('../store.js')

// Add user message and auto disappear.
const temporaryMessage = function (selector, text) {
  $(selector).text(text)
  setTimeout(() => $(selector).text(''), 3000)
}

const signUpSuccess = () => {
  temporaryMessage('#user-message', 'Successfully Created User')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

const signInSuccess = (responseData) => {
  temporaryMessage('#user-message', 'Successfully Signed in')
  // save the token
  store.user = responseData.user
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

const changePasswordSuccess = () => {
  console.log('This is the email ' + store.user.email)
  temporaryMessage('#user-message', store.user.email + ' successfully updated password!')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

const changePasswordFailure = () => {
  temporaryMessage('#user-message', 'Changed Password Failure')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

// Used for both sign up and sign in failure.
const signUpFailure = () => {
  temporaryMessage('#user-message', 'Sign in error!!')
  // Below resets form fields
  $(`form`).trigger(`reset`)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure
}
