import { weaponsComp, imageComp, spockedComp, winnersComp } from './components.js'

test('Weapons creation', () => {
  const list = weaponsComp(['firstWeap', 'secondWeap'])

  const actual = list.children
  const expectedLength = 2
  const actualChild = list.firstElementChild
  const expectedChildTag = 'LI'
  const actualWeapon = actualChild.firstElementChild
  const expectWeaponClass = 'weapon'

  expect(actual).toHaveLength(expectedLength)
  expect(actualChild.tagName).toBe(expectedChildTag)
  expect(actualWeapon.classList).toContain(expectWeaponClass)
})

test('Weapons creation snapshot', () => {
  const list = weaponsComp(['firstWeap', 'secondWeap'])
  expect(list).toMatchSnapshot()
})

test('Weapons action', () => {
  const list = weaponsComp(['firstWeap'], () => 'Hello')

  const actual = list.firstElementChild.firstElementChild.onclick()
  const expected = 'Hello'

  expect(actual).toBe(expected)
})

test('First winner creation snapshot for a player', () => {
  const res = {
    firstWeapon: 'scissors',
    secondWeapon: 'paper',
    winner: 'firstWeapon',
  }

  const list = winnersComp(res, true, () => 'Hello')
  expect(list).toMatchSnapshot()
})

test('First winner creation snapshot', () => {
  const res = {
    firstWeapon: 'scissors',
    secondWeapon: 'paper',
    winner: 'firstWeapon',
  }

  const list = winnersComp(res, false, () => 'Hello')
  expect(list).toMatchSnapshot()
})

test('Second winner creation snapshot for a player', () => {
  const res = {
    firstWeapon: 'paper',
    secondWeapon: 'scissors',
    winner: 'secondWeapon',
  }

  const list = winnersComp(res, true, () => 'Hello')
  expect(list).toMatchSnapshot()
})

test('Second winner creation snapshot', () => {
  const res = {
    firstWeapon: 'paper',
    secondWeapon: 'scissors',
    winner: 'secondWeapon',
  }

  const list = winnersComp(res, false, () => 'Hello')
  expect(list).toMatchSnapshot()
})

test('Draw game creation snapshot', () => {
  const res = {
    firstWeapon: 'paper',
    secondWeapon: 'scissors',
    winner: null,
  }

  const list = winnersComp(res, false, () => 'Hello')
  expect(list).toMatchSnapshot()
})

test('Draw game creation snapshot with spock', () => {
  const res = {
    firstWeapon: 'spock',
    secondWeapon: 'spock',
    winner: null,
  }

  const list = winnersComp(res, false, () => 'Hello')
  expect(list).toMatchSnapshot()
})

test('Image creation snapshot', () => {
  const img = imageComp()
  expect(img).toMatchSnapshot()
})

test('Spock snapshot', () => {
  const spocked = spockedComp()
  expect(spocked).toMatchSnapshot()
})
