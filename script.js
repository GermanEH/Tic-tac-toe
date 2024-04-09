import Board from './js/game/Board';
import Player from './js/game/Players';

function GameController(playersData) {
  const players = [];
  for (let i = 0; i < playersData.length; i++) {
    players.push(Player());
    players[i].setName(playersData[i].name);
    players[i].setMark(playersData[i].mark);
  }

  const board = Board();
  const score = [];

  const boardCells = board.getBoardCells();

  const activePlayer = players[0];

  const switchTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;
  const getScore = () => score;

  return { switchTurn, getScore };
}

function ScreenController() {
  playersData = [];

  const initGame = () => {
    const game = GameController(playersData);
  };

  initGame();
}
