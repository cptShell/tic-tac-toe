class TicTacToe {
  constructor() {
    this.state = [
      [null,null,null],
      [null,null,null],
      [null,null,null]
    ]
    this.winConditions = [
      [ 0, 1, 2 ],
      [ 3, 4, 5 ],
      [ 6, 7, 8 ],
      [ 0, 3, 6 ],
      [ 1, 4, 7 ],
      [ 2, 5, 8 ],
      [ 0, 4, 8 ],
      [ 2, 4, 6 ]
    ];
    this.currentPlayer = 'x';
    this.finished = false;
    this.fullField = false;
    this.winner = null;
  }

  getCurrentPlayerSymbol() {
    return 1;
  }

  nextTurn(rowIndex, columnIndex) {
    const currentSquare = this.state[rowIndex][columnIndex];

    if(!currentSquare) {
      this.state[rowIndex][columnIndex] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
    } 

    this.fullField = this.state.flat().every(square => square !== null);

    let allSquares = this.state.flat();
    let lastTurnPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
    for (let i = 0; i < this.winConditions.length; i++) {
      const a = allSquares[this.winConditions[i][0]];
      const b = allSquares[this.winConditions[i][1]];
      const c = allSquares[this.winConditions[i][2]];

      if (a === lastTurnPlayer && a === b && b === c) {
        this.winner = lastTurnPlayer;
      }
    }
  }

  isFinished() {
    return this.finished;
  }

  getWinner() {
    return this.winner;
  }

  noMoreTurns() {
    return this.fullField;
  }

  isDraw() {
    return this.fullField === true && this.winner === null;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.state[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
