class Player {
  constructor() {
    shipPlacement()
    this.PlayerBoard = CreateEmptyBoard()
    this.ComputerBoard = CreateEmptyBoard()
  }

  // Function to create the Game Board // tested //
  CreateEmptyBoard() {
    const emptyBoard = []
    for (let i = 0; i < 5; i++) {
      emptyBoard[i] = []
      for (let j = 0; j < 5; j++) {
        emptyBoard[i][j] = 0
      }
    }
    return emptyBoard
  }

  shipPlacement() {
    const Ship1 = new Ship(1)
    const Ship2 = new Ship(2)
    const Ship3 = new Ship(3)

    const GameBoard = new GameBoard()

    // First Ship
    function firstShip() {
      const FirstPosition = prompt('Type a position for your ship')
      if (checkPosition(FirstPosition)) {
        const [a, b] = FirstPosition.split(', ')
        this.PlayerBoard[(a, b)] = Ship1
      }
    }
    firstShip()

    // Second Ship
    function secondShip() {
      const SecPosition1 = prompt('Type a position for your ship')
      if (this.checkPosition(SecPosition1)) {
        const [a, b] = parseInt(SecPosition1.split(', '))
        this.PlayerBoard[a][b] = Ship2
        const SecPosition2 = prompt('Type a adjacent position for your ship')
        if (this.checkPosition(SecPosition2)) {
        }
      }
    }
  }

  checkAdjacent(position, prevPosition) {
    const [a, b] = parseInt(prevPosition.split(', '))
    const [x, y] = parseInt(position.split(', '))
    const adjacent = [[a + 1, b], [(a - 1, b)], [(a, b + 1)], [(a, b - 1)]]
    const arr = [x, y]
    for (let i = 0; i < adjacent.length; i++) {
      if (arr[0] === adjacent[i][0] && arr[1] === adjacent[i][1]) {
        return true
      }
      }
      return false;
    }
  }

  checkPosition(position) {
    const [a, b] = position.split(', ')
    if (this.PlayerBoard[a][b] === 0) {
      return true
    } else {
      return false
    }
  }
}
class Ship {
  constructor(length) {
    this.length = length
    this.isSunk = false
    this.timeHited = 0
  }
}

module.exports = { GameBoard }
