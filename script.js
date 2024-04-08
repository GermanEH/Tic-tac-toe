function Cell() {
  const value = 0;

  const getValue = () => value;

  const mark = (mark) => (value = mark);

  const resetValue = () => (value = 0);

  return { getValue, mark, resetValue };
}

function Board() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board.push(Cell());
    }
  }

  const getBoardCells = () => boardCells;

  const markCell = (cell, mark) => {
    const cell = boardCells[cell.row][cell.column];
    const value = cell.getValue();

    if (value !== 0) {
      return;
    } else {
      cell.mark(mark);
    }
  };

  return { getBoardCells, markCell };
}

function GameController(players) {
  const board = Board();

  const boardCells = board.getBoardCells();

  return;
}

function ScreenController() {
  players = [];

  const initGame = () => {
    const game = GameController(players);
  };

  initGame();
}
