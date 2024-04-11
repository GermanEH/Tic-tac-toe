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

  const playTurn = (selectedCell) => {
    if (!selectedCell) {
      return;
    } else {
      board.markCell(selectedCell, getActivePlayer().mark);
    }
    const winnerData = checkWinner();

    if (winnerData) {
      printNewTurn(winnerData);
      return winnerData;
    } else {
      switchTurn();
      printNewTurn();
    }
  };

  const checkWinner = () => {
    const winnerCombinations = [
      [0, 1, 2],
      [0, 3, 6],
      [3, 4, 5],
      [1, 4, 7],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const winnerCombination of winnerCombinations) {
      const [a, b, c] = winnerCombination;
      if (
        boardCells[a].getValue() !== '' &&
        boardCells[a].getValue() === boardCells[b].getValue() &&
        boardCells[b].getValue() === boardCells[c].getValue()
      ) {
        return { activePlayer, winnerCombination };
      }
    }
  };

  const printNewTurn = (winnerData) => {
    if (winnerData) {
      board.printWinner(winnerData.winnerCombination);
      board.printBoard();
      setTimeout(() => {
        board.resetBoard();
      }, 1000);
    } else {
      board.printBoard();
    }
  };

  return {
    playTurn,
    getScore,
    board: board.getBoardCells(),
  };
}

export default GameController;
