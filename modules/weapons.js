const normalPRS = {
  rock: {
    beats: ['scissors'],
    loses: ['paper'],
  },
  paper: {
    beats: ['rock'],
    loses: ['scissors'],
  },
  scissors: {
    beats: ['paper'],
    loses: ['rock'],
  },
}

const spockPRS = {
  spock: {
    beats: ['scissors', 'rock'],
    loses: ['lizard', 'paper'],
  },
  scissors: {
    beats: ['paper', 'lizard'],
    loses: ['spock', 'rock'],
  },
  paper: {
    beats: ['rock', 'spock'],
    loses: ['scissors', 'lizard'],
  },
  rock: {
    beats: ['lizard', 'scissors'],
    loses: ['paper', 'spock'],
  },
  lizard: {
    beats: ['spock', 'paper'],
    loses: ['scissors', 'rock'],
  },
}

export default normalPRS
