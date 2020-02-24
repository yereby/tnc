export function weaponsComp(list, playAction) {
  const ul = document.createElement('ul')
  ul.classList.add('weaponsList')

  list.map((weapon) => {
    const newLi = document.createElement('li')

    const newWeapon = document.createElement('img')
    newWeapon.src = `/pics/${weapon}.png`
    newWeapon.classList.add('weapon')
    newWeapon.alt = weapon
    newWeapon.width = '100'
    newWeapon.onclick = () => playAction(weapon)

    newLi.appendChild(newWeapon)
    ul.appendChild(newLi)
  })

  return ul
}

export function imageComp(image) {
  const pic = document.createElement('img')
  pic.src = `./pics/${image}.png`
  pic.alt = image
  pic.width = '100'

  return pic
}

/*
 * Create the winners component
 * We display a message depending of who is the winner
 * and then we create the weapons list
 *
 * @param {object } res - Result of the game
 * @param {boolean} isPlayer - Human or not
 * @param {function} spock - The method for being spocked
 */
export function winnersComp({ firstWeapon, secondWeapon, winner }, isPlayer, spock) {
  const title = document.createElement('p')
  if (winner === 'firstWeapon') {
    title.innerHTML = isPlayer ? 'You <b>win</b>.' : `<b>${firstWeapon}</b> wins.`
  }
  if (winner === 'secondWeapon') {
    title.innerHTML = isPlayer ? 'You <b>lose</b>.' : `<b>${secondWeapon}</b> wins.`
  }
  if (winner === null) {
    title.innerHTML = 'Draw.'
    if (firstWeapon === 'spock') { spock(true) }
  }

  const ul = document.createElement('ul')
  ul.classList.add('weaponsList')

  const firstPic = imageComp(firstWeapon)
  const secondPic = imageComp(secondWeapon)

  for (let i = 0; i < 3; i++) {
    const newLi = document.createElement('li')
    if (i === 0 || i === 2) { newLi.appendChild(i === 0 ? firstPic : secondPic) }
    if (i === 1) { newLi.innerHTML = 'VS.' }

    ul.appendChild(newLi)
  }

  const list = document.createElement('div')
  list.classList.add('resultList')
  list.appendChild(title)
  list.appendChild(ul)

  return list
}

export function spockedComp() {
  const spocked = document.createElement('img')
  spocked.src = './pics/spocked.jpg'
  spocked.classList.add('spocked')
  spocked.alt = 'You have been Spocked'
  spocked.title = 'You have been Spocked'

  return spocked
}
