const { GameBoard, sum } = require('./index')

describe('Gameboard', () => {
  it('Player Board', () => {
    const factoryTest = new GameBoard()
    expect(factoryTest.playerBoard).toStrictEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ])
  })
})
