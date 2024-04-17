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

  $playerOneBoard.appendChild($playerOneBoardColor);
  $playerOneBoard.appendChild($playerOneBoardSelect);

  $playerOne.appendChild($playerOnePicture);
  $playerOne.appendChild($playerOneBoard);

  //PlayerTwo

  let $playerTwo = document.querySelector('.playerTwo');
  let $playerTwoPicture = document.createElement('div');
  $playerTwoPicture.style.background =
    theme === 'Medieval'
      ? 'url(./ui/frames/medieval_frame.png)'
      : theme === 'Futuristic'
      ? 'url(./ui/frames/futuristic_frame.png)'
      : 'url(./ui/frames/vintage_frame.png)';
  $playerTwoPicture.style.backgroundSize = 'contain';
  $playerTwoPicture.style.backgroundRepeat = 'no-repeat';
  $playerTwoPicture.classList.add('playerPicture');
  //  theme === 'Medieval';
  // ? 'url(medieval_board.png)'
  // : theme === 'Futuristic'
  // ? 'url(futuristic_panel.jpg)'
  // :
  let $playerTwoBoard = document.createElement('div');
  $playerTwoBoard.style.background =
    theme === 'Medieval'
      ? 'url(./medieval_board.png)'
      : theme === 'Futuristic'
      ? 'url(./futuristic_panel.jpg)'
      : 'url(./vintage_board.png)';
  $playerTwoBoard.style.backgroundRepeat = 'no-repeat';
  $playerTwoBoard.style.backgroundSize = 'contain';
  $playerTwoBoard.classList.add('playerBoard');
  const playerTwo = document.createElement('div');
  playerTwo.textContent = players[1]?.name || 'Player Two';
  $playerTwoBoard.appendChild(playerTwo);

  let $playerTwoBoardSelect = document.createElement('select');
  weapons.forEach((weapon) => {
    const $weapon = document.createElement('option');
    $weapon.value = weapon.value;
    $weapon.text = weapon.value;
    $playerTwoBoardSelect.appendChild($weapon);
  });

  $playerTwoBoardSelect.addEventListener('change', function () {
    game.changeWeapon(
      players[1]?.name || 'Player Two',
      weapons[this.selectedIndex].src
    );
  });

  const $playerTwoBoardColor = document.createElement('select');

  colors.forEach((color) => {
    const $color = document.createElement('option');
    $color.value = color;
    $color.text = color;
    $playerTwoBoardColor.appendChild($color);
  });

  $playerTwoBoard.appendChild($playerTwoBoardColor);
  $playerTwoBoard.appendChild($playerTwoBoardSelect);

  $playerTwoBoardColor.addEventListener('change', function () {
    game.changeColor(
      players[1].name || 'Player Two',
      colors[this.selectedIndex]
    );
  });

  $playerTwo.appendChild($playerTwoPicture);
  $playerTwo.appendChild($playerTwoBoard);
  // $playerTwo.style.transform = 'scaleY(1.5)';
  if (players[0].profileImage) {
    let $profileImageOne = document.createElement('img');
    $profileImageOne.src = players[0].profileImage?.name;
    $profileImageOne.style.width = '8vw';
    $profileImageOne.style.height = '8vw';
    $playerOne.appendChild($profileImageOne);
  }
  if (players[1]?.profileImage) {
    let $profileImageTwo = document.createElement('img');
    $profileImageTwo.src = players[1].profileImage.name;
    $profileImageTwo.style.width = '8vw';
    $profileImageTwo.style.height = '8vw';
    $playerTwo.appendChild($profileImageTwo);
  }

  return { $playerOne, $playerTwo, $playerOneBoard, $playerTwoBoard };
}
