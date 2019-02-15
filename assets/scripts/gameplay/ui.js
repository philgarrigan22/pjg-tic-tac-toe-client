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

const showGamesSuccess = (responseData) => {
  temporaryMessage('#game-message', 'Successfully accesed past games.')
  // Below resets form fields
  $(`form`).trigger(`reset`)
  responseData.games.forEach(games => {
    const exampleHtml = (`
    <p>ID: ${games.id}</p>
    <p>Gameboard: ${games.cells}</p>
    <p>Gameover?: ${games.over}</p>
    <br>
    `)

    $('#show-games-list').append(exampleHtml)
  })
}

// const showAllExamplesSuccess = (responseData) => {
//   $('#user-message').text('Successfully found all examples!')
//   console.log(responseData)
//   responseData.examples.forEach(example => {
//     const exampleHtml = (`
//     <p>Text: ${example.text}</p>
//     <p>ID: ${example.id}</p>
//     <p>Editable: ${example.editable}</p>
//     <br>
//     `)
//
//     $('#show-examples-list').append(exampleHtml)
//   })
// }

// const showGamesfailure = () => {
//
// }

module.exports = {
  createGameSuccess,
  createGameFailure,
  showGamesSuccess
  // showGamesFailure
}
