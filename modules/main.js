import weapons from './weapons.js'
import createGame from './game.js'
import { weaponsComp, imageComp, spockedComp, winnersComp } from './components.js'

let game
const weaponsDiv = document.querySelector('.weapons')
const resultDiv = document.querySelector('.result')

/*
 * Display the weapons for the human player
 */
function displayWeapons() {
  const newPar = document.createElement('p')
  newPar.innerHTML = 'Choose your weapon'
  weaponsDiv.appendChild(newPar)

  const weaponsList = weaponsComp(Object.keys(weapons), play)

  weaponsDiv.appendChild(weaponsList)
}

// Remove the weapons
function removeWeapons() { weaponsDiv.innerHTML = '' }
// Remove the result
function removeResult() {
  const resultListDiv = document.querySelector('.resultList')
  if (resultListDiv) { resultDiv.removeChild(resultListDiv) }
}

/*
 * Display the result
 * @param {object} res - The result of the game
 */
function showResult(res) {
  const winnersList = winnersComp(res, game.getPlayerWeapon(), spock)
  resultDiv.appendChild(winnersList)
}

/*
 * Launch the game and and show the result
 * @param {boolean} weapon - Weapon used if there is a human player
 */
function play(weapon = null) {
  spock()
  removeResult()

  game.setPlayerWeapon(weapon)
  const res = game.play()

  showResult(res)
}

/*
 * Preparation of the game
 * @param {boolean} gamer - Human player or not
 */
function resetGame(gamer) {
  removeWeapons()
  removeResult()

  game = null
  game = createGame()

  if (gamer) { displayWeapons() }
}

/*
 * For a special case, spock is coming
 * @param {boolean} showSpock - To display spock or not
 */
function spock(showSpock = false) {
  const spocked = document.querySelector('.spocked')
  if (spocked) { document.body.removeChild(spocked) }
  if (showSpock) { document.body.appendChild(spockedComp()) }
}

/*
 * Add the click events on the menu
 */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.playerGame').onclick = function(event) {
    event.preventDefault()
    resetGame(1)
  }

  document.querySelector('.computerGame').onclick = function(event) {
    event.preventDefault()
    resetGame(0)
    play()
  }
});
