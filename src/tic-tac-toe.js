class TicTacToe {
  constructor() {
    this.state = [
      [null,null,null],
      [null,null,null],
      [null,null,null]
    ]
    this.currentPlayer = 'x';
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
    this.finished = false;
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
  }

  nextTurn(rowIndex, columnIndex) {
    const currentSquare = this.state[rowIndex][columnIndex];

    if(!currentSquare) {
      this.state[rowIndex][columnIndex] = this.currentPlayer;
      this.getCurrentPlayerSymbol();
    } else {
      console.log('wrong');
    }
  }

  isFinished() {
    return this.finished;
  }

  getWinner() {
    console.log('new');
    const allSquares = this.state.flat();
    const lastTurnPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
    for (let i = 0; i < this.winConditions.length; i++) {
      const a = allSquares[this.winConditions[i][0]];
      const b = allSquares[this.winConditions[i][1]];
      const c = allSquares[this.winConditions[i][2]];
      console.log(a,b,c);
      if (a === lastTurnPlayer && a === b && b === c) {
        return lastTurnPlayer;
      }
    }
    return null;
  }

  noMoreTurns() {
    const fullField = this.state.flat().every(square => square !== null);
    console.log(fullField);
    if(fullField) {
      this.finished = !this.finished;
      return true;
    }
  }

  isDraw() {
    if(this.noMoreTurns()) {
      console.log('no turns');
      this.finished = !this.finished;
      return true;
    }
  }

  getFieldValue(rowIndex, colIndex) {
    return this.state[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
