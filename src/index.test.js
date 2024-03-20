const { Player } = require('./index')
const PlayerTest = new Player()

// GameBoard Function
describe('Gameboard', () => {
  it('Player Board', () => {
    expect(PlayerTest.PlayerBoard).toStrictEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ])
  })
})

describe('First Placement', () => {
  it('', () => {
    expect(PlayerTest.firstShip('1, 2')).toBe(PlayerTest.PlayerBoard[1])
  })
})

// Adjacent Function
describe('Adjacent Moves', () => {
  beforeEach(() => {
    console.log('Movement')
  })
  it('Adjacent move', () => {
    expect(PlayerTest.checkAdjacent('1, 2', '1, 3')).toBe(true)
  })
  it('Adjacent move', () => {
    expect(PlayerTest.checkAdjacent('1, 2', '1, 1')).toBe(true)
  })
  it('Adjacent move', () => {
    expect(PlayerTest.checkAdjacent('1, 2', '2, 2')).toBe(true)
  })
  it('Adjacent move', () => {
    expect(PlayerTest.checkAdjacent('1, 2', '0, 2')).toBe(true)
  })
})
