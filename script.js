function Cell() {
  const value = '';

  const getValue = () => value;

  return getValue;
}

function Board() {
  const boardCells = [];

  const getBoardCells = () => boardCells;

  return getBoardCells;
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
