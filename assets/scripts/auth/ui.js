'use strict'
// const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-message').text('Successfully Created User')
  // Below rests form fields
  $(`form`).trigger(`reset`)
}

const signUpFailure = () => {
  $('#user-message').text('Sign in error!!')
  // Below rests form fields
  $(`form`).trigger(`reset`)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
