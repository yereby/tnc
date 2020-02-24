import weapons from './weapons.js'

export default () => {
  const state = {
    weapons: Object.keys(weapons),
    playerWeapon: null,
  }

  return {
    getPlayerWeapon: () => state.playerWeapon,
    setPlayerWeapon: (weapon) => state.playerWeapon = weapon,

    computerChoice() {
      const weaponsNumber = state.weapons.length
      const rand = Math.floor(Math.random() * weaponsNumber)
      return state.weapons[rand]
    },

    checkWinner(firstWeapon, secondWeapon) {
      if (weapons[firstWeapon].beats.includes(secondWeapon)) { return { firstWeapon, secondWeapon, winner: 'firstWeapon' } }
      if (weapons[firstWeapon].loses.includes(secondWeapon)) { return { firstWeapon, secondWeapon, winner: 'secondWeapon' } }
      return { firstWeapon, secondWeapon, winner: null }
    },

    play() {
      const firstWeapon = state.playerWeapon || this.computerChoice()
      const secondWeapon = this.computerChoice()
      return this.checkWinner(firstWeapon, secondWeapon)
    },
  }
}
