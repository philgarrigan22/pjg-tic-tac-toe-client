const config = require('../config.js')
// const store = require('../store.js')

// From auth sign up
const signUp = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

// From example creation (will use for sign in / etc)

// const createExample = (formData) => {
//   return $.ajax({
//     url: config.apiUrl + '/examples',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: formData
//   })
// }

module.exports = {
  signUp,
  signIn
}
