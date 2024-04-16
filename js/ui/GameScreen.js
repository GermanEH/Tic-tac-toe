export default function GameScreen(players, theme) {
  let $gameContainer = document.getElementById('gameContainer');
  $gameContainer.classList.add(
    theme === 'Medieval'
      ? 'gameContainer_medieval'
      : theme === 'Futuristic'
      ? 'gameContainer_futuristic'
      : 'gameContainer_vintage'
  );

  const board = GameBoard();

  const game = GameController(players, theme, board);
}
