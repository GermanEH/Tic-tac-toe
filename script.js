import Board from './js/game/Board';

function GameController(players) {
  const board = Board();
  const score = [];

  const boardCells = board.getBoardCells();

  const activePlayer = players[0];

  const switchTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getScore = () => score;

  return { switchTurn, getScore };
}

function ScreenController() {
  players = [];

  const initGame = () => {
    const game = GameController(players);
  };

  initGame();
}
