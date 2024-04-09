import Board from './js/game/Board';
import Player from './js/game/Players';

function GameController(players) {
  const player = Player();

  for (let i = 0; i < players.length; i++) {
    player.setName(players[i].name);
    player.setMark(players[i].mark);
  }

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
