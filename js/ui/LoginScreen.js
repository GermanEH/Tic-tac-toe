export default function LoginScreen(playerMode) {
  let $loginContainer = document.querySelector('.loginContainer');
  let $playerModeContainer = document.querySelector('.playerModeContainer');
  // $loginContainer.style.display = 'none';
  $playerModeContainer.style.display = 'none';
  $loginContainer.style.display = 'flex';

  const playGame = document.getElementById('playButton');
  console.log('estamos en loginScreen', playerMode);
  let $playerTitleOne = document.querySelector('.player_title');
  let $playerInputOne = document.querySelector('.playerInput');
  $playerInputOne.addEventListener('input', (e) => {
    $playerTitleOne.textContent = e.target.value;
  });
  const $fileInputOne = document.querySelector('.fileInput');

  const customUploadButtonOne = document.querySelector('.custom-upload-button');

  const previewImageOne = document.querySelector('.previewImage');
  const previewTextOne = document.querySelector('.previewText');
  previewImageOne.style.display = 'none';

  customUploadButtonOne.addEventListener('click', function () {
    $fileInputOne.click();
  });
  $fileInputOne.addEventListener('change', () => {
    const file = $fileInputOne.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        previewImageOne.style.display = 'inline-block';
        previewTextOne.style.display = 'none';
        previewImageOne.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  if (playerMode === 'multiplayer') {
    let $playerOne = document.getElementById('player');
    let $playerTwo = $playerOne.cloneNode(true);
    let $players = document.querySelector('.players');
    $players.appendChild($playerTwo);
    // $playerTwo.id = 'playerTwo';

    let $playerTitleTwo = $playerTwo.querySelector('.player_title');
    $playerTitleTwo.textContent = 'Player Two';
    console.log($playerTwo.querySelector('.player_title'));
    let $playerInputTwo = $playerTwo.querySelector('.playerInput');

    $playerInputTwo.addEventListener('input', (e) => {
      $playerTitleTwo.textContent = e.target.value;
    });
    const $fileInputTwo = $playerTwo.querySelector('.fileInput');
    const customUploadButtonTwo = $playerTwo.querySelector(
      '.custom-upload-button'
    );
    const previewImageTwo = $playerTwo.querySelector('.previewImage');
    const previewTextTwo = $playerTwo.querySelector('.previewText');
    previewImageTwo.style.display = 'none';

    customUploadButtonTwo.addEventListener('click', function () {
      $fileInputTwo.click();
    });

    $fileInputTwo.addEventListener('change', () => {
      const file = $fileInputTwo.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewImageTwo.style.display = 'inline-block';
          previewTextTwo.style.display = 'none';
          previewImageTwo.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  } else {
    const $dificultyLevel = document.createElement('form');
    const levels = ['easy', 'intermediate', 'hard'];
    levels.forEach((level) => {
      const $level = document.createElement('button');
      $level.style.pointerEvents = 'auto';
      $level.style.display = 'grid';
      $level.textContent = level;
      $level.addEventListener('click', (e) => {
        e.preventDefault();
        selectedLevel = level;
        checkFormValidity();
      });
      $dificultyLevel.appendChild($level);
    });
    $players.appendChild($dificultyLevel);
  }

  function checkFormValidity() {
    if (playerMode === 'multiplayer') {
      if (
        document.querySelector('playerInput').value.trim() !== '' &&
        $playerTwo.querySelector('playerInput').value !== ''
      ) {
        enablePlayButton();
      } else {
        disablePlayButton();
      }
    } else {
      if (
        document.querySelector('.playerInput').value.trim() !== '' &&
        selectedLevel
      ) {
        enablePlayButton();
      } else {
        disablePlayButton();
      }
    }
  }
  function enablePlayButton() {
    playGame.removeAttribute('disabled');
  }
  function disablePlayButton() {
    playGame.setAttribute('disabled', true);
  }

  playGame.addEventListener('click', (e) => {
    addPlayers(e);
  });

  function addPlayers(event) {
    event.preventDefault();
    let playerNameOne = $playerInputOne.value;
    let playerNameTwo = $playerInputOne.value;
    let fileOne = $fileInputOne.files[0];
    let fileTwo = $fileInputTwo.files[0];
    players.push({ name: playerNameOne, profileImage: fileOne });
    players.push({ name: playerNameTwo, profileImage: fileTwo });
    $loginContainer.style.display = 'none';
    $themeContainer.style.display = 'flex';
  }

  return {
    checkFormValidity,
    $loginContainer,
    playGame,
  };
}
window.checkFormValidity = LoginScreen().checkFormValidity;
