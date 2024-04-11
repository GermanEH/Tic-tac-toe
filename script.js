function ScreenController() {
  playersData = [];

  const initGame = () => {
    const game = GameController(playersData);
  };

  initGame();
}
