import weapons from './weapons.js'
import createGame from './game.js'

const WEAPONS = Object.keys(weapons)

test('Play a game', () => {
  const game = createGame()
  const res = game.play()

  const actual = res.winner
  expect(actual).toBeDefined()
})

test('Play a game with a player', () => {
  const game = createGame()
  game.setPlayerWeapon('scissors')
  const res = game.play()

  const actual = res.winner
  expect(actual).toBeDefined()
})

test('Is there a player', () => {
  const game = createGame()
  game.setPlayerWeapon('scissors')
  const res = game.getPlayerWeapon()

  const actual = res
  const expected = 'scissors'
  expect(actual).toBe(expected)
})

test('Computer make a choice', () => {
  const game = createGame()
  const choice = game.computerChoice()

  const actual = WEAPONS.includes(choice)
  expect(actual).toBeTruthy()
})

test('Rock vs Rock', () => {
  const game = createGame()
  const res = game.checkWinner('rock', 'rock')

  const actual = res.winner
  expect(actual).toBeNull()
})

test('Rock vs Scissors', () => {
  const game = createGame()
  const res = game.checkWinner('rock', 'scissors')

  const actual = res[res.winner]
  const expected = 'rock'
  expect(actual).toBe(expected)
})

test('Rock vs Paper', () => {
  const game = createGame()
  const res = game.checkWinner('rock', 'paper')

  const actual = res[res.winner]
  const expected = 'paper'
  expect(actual).toBe(expected)
})

test('Paper vs Paper', () => {
  const game = createGame()
  const res = game.checkWinner('paper', 'paper')

  const actual = res.winner
  expect(actual).toBeNull()
})

test('Paper vs Rock', () => {
  const game = createGame()
  const res = game.checkWinner('paper', 'rock')

  const actual = res[res.winner]
  const expected = 'paper'
  expect(actual).toBe(expected)
})

test('Paper vs Scissors', () => {
  const game = createGame()
  const res = game.checkWinner('paper', 'scissors')

  const actual = res[res.winner]
  const expected = 'scissors'
  expect(actual).toBe(expected)
})

test('Scissors vs Scissors', () => {
  const game = createGame()
  const res = game.checkWinner('scissors', 'scissors')

  const actual = res.winner
  expect(actual).toBeNull()
})

test('Scissors vs Paper', () => {
  const game = createGame()
  const res = game.checkWinner('scissors', 'paper')

  const actual = res[res.winner]
  const expected = 'scissors'
  expect(actual).toBe(expected)
})

test('Scissors vs Rock', () => {
  const game = createGame()
  const res = game.checkWinner('scissors', 'rock')

  const actual = res[res.winner]
  const expected = 'rock'
  expect(actual).toBe(expected)
})
