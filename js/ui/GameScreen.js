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
  const { $playerOne, $playerTwo, $playerOneBoard, $playerTwoBoard } =
    renderPlayers(players, theme);

  let $turn = document.querySelector('.turn');
  let $board = document.querySelector('.board');
  let $playerOneScore = document.createElement('div');
  let $playerTwoScore = document.createElement('div');

  const audio = AudioController().gameAudio(theme);

  audio.play();

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

  const renderScore = (players) => {
    $playerOneScore.textContent = `Games won: ${game.getScore(
      players[0].name
    )}`;
    $playerTwoScore.textContent = `Games won: ${game.getScore(
      players[1].name || 'Player Two'
    )}`;
    $playerOneBoard.appendChild($playerOneScore);
    $playerTwoBoard.appendChild($playerTwoScore);
  };

  const updateScreen = (winner) => {
    const boardCells = board.getBoard();
    const activePlayer = game.getActivePlayer();
    renderScore(players);

    if (winner) {
      boardCells.forEach((cell, cellIndex) => {
        if (winner.winnerCombination.includes(cellIndex)) {
          const content = cell.getContent();
          const cellButton = document.querySelector(
            `[data-cell-index="${cellIndex}"]`
          );
          cellButton.innerHTML = content;
          cellButton.classList.toggle('winner', true);
          $board.appendChild(cellButton);
        } else {
          const cellButton = document.querySelector(
            `[data-cell-index="${cellIndex}"]`
          );
          const content = cell.getContent();
          cellButton.innerHTML = content;
          $board.appendChild(cellButton);
        }
      });
    } else {
      $board.textContent = '';
      boardCells.forEach((cell, cellIndex) => {
        const content = cell.getContent();
        const cellButton = document.createElement('button');
        cellButton.dataset.cellIndex = cellIndex;
        cellButton.classList.add('cell');
        cellButton.innerHTML = content;
        $board.appendChild(cellButton);
      });
      $turn.textContent = `It's ${activePlayer.name}'s turn`;
    }
  };
  const clickHandlerBoard = (e) => {
    const selectedCell = e.target.dataset.cellIndex;
    const cells = document.querySelectorAll('button');
    const winner = game.playTurn(selectedCell);
    audio.pause();

    audio.$attackSound.play();

    audio.play();
    if (winner) {
      const cells = document.querySelectorAll('button');
      updateScreen(winner);

      setTimeout(() => {
        updateScreen();
      }, 2000);
    } else {
      updateScreen();
    }
  };
  $board.addEventListener('click', clickHandlerBoard);
  return {
    $gameContainer,
    $playerOne,
    $playerTwo,
    updateScreen,
    clickHandlerBoard,
    renderScore,
  };
}
