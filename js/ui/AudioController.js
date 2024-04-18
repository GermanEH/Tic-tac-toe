export default function AudioController() {
  const $audio = document.getElementById('audio');
  const audioTimer = document.getElementById('audio-timer');
  const audioProgress = document.getElementById('audio-progress');
  const playLogo = document.getElementById('play-logo');
  const volumeLogo = document.getElementById('volume-logo');
  const volume = document.getElementById('volume');
  const customControls = document.querySelector('.custom-controls');

  function playAudio() {
    $audio.play();
    playLogo.src = './audio_pause.png';
  }

  function stopAudio() {
    $audio.pause();
    playLogo.src = './audio_play.png';
  }

  playLogo.addEventListener('click', () => {
    $audio.paused ? playAudio() : stopAudio();
  });

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  }

  function updateTime() {
    const currentTime = formatTime($audio.currentTime);
    const duration = formatTime($audio.duration);
    audioTimer.textContent = `${currentTime} / ${duration}`;
  }

  function updateProgressBar(e) {
    if (e) {
      e.preventDefault();
      audioProgress.value = e.target.value;
      $audio.currentTime = $audio.duration * parseFloat(e.target.value);
    } else {
      const progress = $audio.currentTime / $audio.duration;
      audioProgress.value = `${progress}`;
    }
  }

  function turnOn() {
    $audio.volume = 1;
    volumeLogo.src = './audio_active.png';
  }
  function turnOff() {
    $audio.volume = 0;
    volumeLogo.src = './audio_silence.png';
  }
  function updateVolume(e) {
    if (e.target.value !== undefined) {
      e.preventDefault();
      volume.value = e.target.value;
      $audio.volume = e.target.value;
      if (e.target.value === 0) {
        volumeLogo.src = './audio_silence.png';
      } else {
        volumeLogo.src = './audio_active.png';
      }
    } else {
      $audio.volume === 0 ? turnOn() : turnOff();
    }
  }

  $audio.addEventListener('timeupdate', () => {
    updateTime();
    updateProgressBar();
  });

  audioProgress.addEventListener('input', updateProgressBar);

  volumeLogo.addEventListener('click', updateVolume);
  volume.addEventListener('input', updateVolume);

  let timeout;
  volumeLogo.addEventListener('mouseover', function () {
    console.log('entramos');
    customControls.style.opacity = '1';
    customControls.style.transform = 'translate(-100%)';
    customControls.style.left = '300px';
    customControls.style.pointerEvents = 'auto';
  });
  volumeLogo.addEventListener('mouseleave', function () {
    timeout = setTimeout(() => {
      customControls.style.opacity = '0';
      customControls.style.transform = 'translate(0%)';
      customControls.style.left = 'auto';
      customControls.style.pointerEvents = 'none';
    }, 1000);
  });

  customControls.addEventListener('mouseover', function () {
    clearTimeout(timeout);
  });

  customControls.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      customControls.style.opacity = '0';
      customControls.style.transform = 'translate(0%)';
      customControls.style.left = 'auto';
      customControls.style.pointerEvents = 'none';
    }, 1000);
  });

  return { playAudio };
}
