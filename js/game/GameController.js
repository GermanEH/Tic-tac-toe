import Board from './Board';
import Player from './Players';

function GameController(playersData, theme) {
  const players = [];
  for (let i = 0; i < playersData.length; i++) {
    players.push(Player(playersData[i], theme));
  }

  const board = Board();

  const boardCells = board.getBoardCells();

  const activePlayer = players[0];

  const switchTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const getScore = (player) =>
    players.find((p) => p.getName() === player).getPoints();

  const resetScore = () =>
    (players = players.map((player) => ({ ...player, points: 0 })));

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

  const changeWeapon = (player, src) => {
    players.map((p) => {
      if (p.name === player) {
        p.mark.cellContent = p.mark.cellContent.replace(
          /src="([^"]*)"/,
          'src="' + src + '"'
        );
      }
      return p;
    });
  };

  const changeColor = (player, color) => {
    const oppositeColor = players.filter((p) => p.name !== player)[0].mark
      .cellContent;
    players.map((p) => {
      if (p.name === player && !oppositeColor.includes(color)) {
        p.mark.cellContent = p.mark.cellContent.replace(
          /background:\s*([^;]+)/,
          'background:' + color
        );
      }
      return p;
    });
  };

  printNewTurn();

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
    resetScore,
    changeWeapon,
    changeColor,
    board: board.getBoardCells(),
  };
}

export default GameController;
