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

  renderPlayers(players, theme);

  let $audio = document.getElementById('loginAudio');
  // let $playerBoard = document.createElement('img');
  // $playerBoard.src = './medieval_board_cut.jpg';
  // $gameContainer.appendChild($playerBoard);
  $audio.src =
    theme === 'Medieval'
      ? 'medieval_background.mp3'
      : theme === 'Futuristic'
      ? 'futuristic_audio.mp3'
      : 'victorian_audio.mp3';
  $audio.play();

  let $attackSound = document.createElement('audio');
  $attackSound.src =
    theme === 'Medieval'
      ? 'sword_attack.mp3'
      : theme === 'Futuristic'
      ? 'spacecraft_attack.mp3'
      : 'gun_attack.mp3';

  const restartBoard = document.getElementById('restartButton');
  restartBoard.addEventListener('click', () => {
    board.resetBoard();
    updateScreen();
  });

  let resetScore = document.getElementById('resetButton');
  resetScore.addEventListener('click', () => {
    game.resetScore();
    updateScreen();
  });
}
