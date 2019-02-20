'use strict'

const showSignUp = event => {
  event.preventDefault()
  $('.sign-up-block').removeClass('hidden')
}

const hideSignUp = event => {
  event.preventDefault()
  $('.sign-up-block').addClass('hidden')
}

module.exports = {
  showSignUp,
  hideSignUp
}
