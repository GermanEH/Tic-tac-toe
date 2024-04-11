import Board from './Board';
import Player from './Players';

function GameController(playersData) {
  const players = [];
  for (let i = 0; i < playersData.length; i++) {
    players.push(Player());
    players[i].setName(playersData[i].name);
    players[i].setMark(playersData[i].mark);
  }

  const board = Board();

  const boardCells = board.getBoardCells();

  const activePlayer = players[0];
  const score = [];

  const switchTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const getScore = () => {
    for (let i = 0; i < players.length; i++) {
      score.push(players[i].getScore());
    }
  };

  const playTurn = (cell) => {
    if (!cell.row || !cell.column) {
      return;
    } else {
      board.markCell(cell);
    }
    const winner = checkWinner();
    if (winner) {
      printNewTurn(winner);
    } else {
      switchTurn();
      printNewTurn();
    }
  };

  const checkWinner = () => {};
  const printNewTurn = (winner) => {
    if (winner) {
      board.resetBoard();
    } else {
      board.printBoard();
    }
  };

  printNewTurn();

  return {
    playTurn,
    getScore,
    board: board.getBoardCells(),
  };
}
