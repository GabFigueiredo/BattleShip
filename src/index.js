class Player {
  constructor() {
    // shipPlacement() 
    this.PlayerBoard = this.CreateEmptyBoard()
    this.ComputerBoard = this.CreateEmptyBoard()
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
  // Function to place the ships
  shipPlacement() {
    const GameBoard = new GameBoard()
  }

      // First Ship
      firstShip(position) {
        if (checkPosition(position)) {
          const [a, b] = FirstPosition.split(', ')
          this.PlayerBoard[a][b] = new Ship(1)
          return this.PlayerBoard[a]
          const FirstPosition = prompt('Type a position for your ship')
          firstShip(FirstPosition)
        }
      }
  
      // Second Ship
      secondShip() {
        const SecPosition1 = prompt('Type a position for your ship')
        if (this.checkPosition(SecPosition1)) {
          const [a, b] = parseInt(SecPosition1.split(', '))
          this.PlayerBoard[a][b] = Ship2
          const SecPosition2 = prompt('Type a adjacent position for your ship')
          if (this.checkPosition(SecPosition2) && checkAdjacent(SecPosition1, SecPosition2)) {
          }
        }
      } secondShip()

  // Checks if a position is or not adjacent to the previous position // tested //
  checkAdjacent(position, prevPosition) {
    const [a, b] = prevPosition.split(', ').map(coord => parseInt(coord.trim()))
    const [x, y] = position.split(', ').map(coord => parseInt(coord.trim()))
    const adjacent = [[a + 1, b], [a - 1, b], [a, b + 1], [a, b - 1]]
    const arr = [x, y]
    for (let i = 0; i < adjacent.length; i++) {
      if (arr[0] === adjacent[i][0] && arr[1] === adjacent[i][1]) {
        return true
      }
      }
      return false;
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

module.exports = { Player }
