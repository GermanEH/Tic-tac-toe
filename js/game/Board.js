function Cell() {
  const value = 0;

  const getValue = () => value;

  const mark = (mark) => (value = mark);

  const resetValue = () => (value = 0);

  return { getValue, mark, resetValue };
}

export default function Board() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board.push(Cell());
    }
  }

  const getBoardCells = () => board;

  const markCell = (cell, mark) => {
    const cell = board[cell.row][cell.column];
    const value = cell.getValue();

    if (value !== 0) {
      return;
    } else {
      cell.mark(mark);
    }
  };

  let boardWithCellValues = [];

  const printBoard = () => {
    boardWithCellValues = board.map((row) => {
      row.map((cell) => cell.getValue());
    });
  };

  const resetBoard = () => {
    boardWithCellValues = board.map((row) => {
      row.map((cell) => cell.resetValue());
    });
  };

  return { getBoardCells, markCell, printBoard, resetBoard };
}