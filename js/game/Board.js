import Cell from './Cells';

export default function Board() {
  const board = [];

  for (let i = 0; i < 9; i++) {
    board.push(Cell());
  }

  const getBoardCells = () => board;

  const markCell = (selectedCell, mark) => {
    const cell = board[selectedCell];
    const value = cell.getValue();

    if (value !== '') {
      return;
    } else {
      cell.mark(mark);
    }
  };

  let boardWithCellValues = [];

  const printBoard = () => {
    boardWithCellValues = board.map((cell) => cell.getValue());
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
