import LoginScreen from './LoginScreen.js';

export default function PlayerModeScreen() {
  const $playerModeContainer = document.querySelector('.playerModeContainer');
  $playerModeContainer.style.display = 'none';

  const $singleplayer = document.querySelector('.singleplayer');
  $singleplayer.addEventListener('click', () => LoginScreen('singleplayer'));

  const $multiplayer = document.querySelector('.multiplayer');
  $multiplayer.addEventListener('click', () => LoginScreen('multiplayer'));

  return { $playerModeContainer };
}
