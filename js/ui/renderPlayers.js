import colors from './colors.js';
import setWeapons from './weapons.js';

export default function renderPlayers(players, theme) {
  const weapons = setWeapons(theme);

  //Player One

  let $playerOne = document.querySelector('.playerOne');
  let $playerOnePicture = document.createElement('div');
  $playerOnePicture.style.background =
    theme === 'Medieval'
      ? 'url(./ui/frames/medieval_frame.png)'
      : theme === 'Futuristic'
      ? 'url(./ui/frames/futuristic_frame.png)'
      : 'url(./ui/frames/vintage_frame.png)';
  $playerOnePicture.style.backgroundSize = 'contain';
  $playerOnePicture.style.backgroundRepeat = 'no-repeat';
  $playerOnePicture.classList.add('playerPicture');
  $playerOnePicture.classList.add('playerPicture');
  let $playerOneBoard = document.createElement('div');
  $playerOneBoard.style.background =
    theme === 'Medieval'
      ? 'url(./medieval_board.png)'
      : theme === 'Futuristic'
      ? 'url(./futuristic_panel.jpg)'
      : 'url(./vintage_board.png)';
  $playerOneBoard.style.backgroundRepeat = 'no-repeat';
  $playerOneBoard.style.backgroundSize = 'contain';
  $playerOneBoard.classList.add('playerBoard');
  let $playerOneBoardSelect = document.createElement('select');

  const playerOne = document.createElement('div');
  playerOne.textContent = players[0].name;
  $playerOneBoard.appendChild(playerOne);

  weapons.forEach((weapon) => {
    const $weapon = document.createElement('option');
    $weapon.value = weapon.value;
    $weapon.text = weapon.value;
    $playerOneBoardSelect.appendChild($weapon);
  });

  const $playerOneBoardColor = document.createElement('select');
  colors.forEach((color) => {
    const $color = document.createElement('option');
    $color.value = color;
    $color.text = color;
    $playerOneBoardColor.appendChild($color);
  });

  $playerOneBoardColor.addEventListener('change', function () {
    game.changeColor(players[0].name, colors[this.selectedIndex]);
  });
  $playerOneBoardSelect.addEventListener('change', function () {
    game.changeWeapon(players[0].name, weapons[this.selectedIndex].src);
  });

  $playerOneBoard.append($playerOneBoardColor, $playerOneBoardSelect);

  $playerOne.append($playerOnePicture, $playerOneBoard);

  if (players[0].profileImage) {
    let $profileImageOne = document.createElement('img');
    $profileImageOne.src = players[0].profileImage?.name;
    $profileImageOne.style.width = '8vw';
    $profileImageOne.style.height = '8vw';
    $playerOne.appendChild($profileImageOne);
  }

  //PlayerTwo

  let $playerTwo = $playerOne.cloneNode(true);
  $playerTwo.classList.add('.playerTwo');
  let $main = document.querySelector('.gameContainer main');
  $main.appendChild($playerTwo);
  let $playerTwoBoard = $playerTwo.querySelector('.playerBoard');
  const playerTwo = $playerTwo.querySelector('.playerBoard div');
  playerTwo.textContent = players[1]?.name || 'Player Two';
  let $playerTwoBoardSelect = $playerTwo.querySelectorAll('select')[1];
  $playerTwoBoardSelect.addEventListener('change', function () {
    game.changeWeapon(
      players[1]?.name || 'Player Two',
      weapons[this.selectedIndex].src
    );
  });

  const $playerTwoBoardColor = $playerTwo.querySelector('select');

  $playerTwoBoardColor.addEventListener('change', function () {
    game.changeColor(
      players[1].name || 'Player Two',
      colors[this.selectedIndex]
    );
  });

  if (players[1]?.profileImage) {
    let $profileImageTwo =
      $playerTwo.querySelector('img') || $playerTwo.createElement('img');
    $profileImageTwo.src = players[1].profileImage.name;
  }

  return { $playerOne, $playerTwo, $playerOneBoard, $playerTwoBoard };
}
