import Cell from './Cells';

export default function Board() {
  const board = [];

  for (let i = 0; i < 9; i++) {
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
    boardWithCellValues = board.map((cell) => cell.resetCell());
  };

  const printWinner = (winnerCells) => {
    boardWithCellValues = board.map((cell, i) => {
      if (winnerCells.includes(i)) {
        cell.setWinner();
      }
    });
  };

  return { getBoardCells, markCell, printBoard, resetBoard, printWinner };
}
