'use strict'
const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-message').text('Successfully Created User')
  // Below rests form fields
  $(`form`).trigger(`reset`)
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully Signed in')
  // save the token
  store.user = responseData.user
  // Below rests form fields
  $(`form`).trigger(`reset`)
}

// Used for both sign up and sign in failure.
const signUpFailure = () => {
  $('#user-message').text('Sign in error!!')
  // Below rests form fields
  $(`form`).trigger(`reset`)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess
}
