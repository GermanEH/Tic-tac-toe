function Player(playerData, theme) {
  const { name, profileImage, value } = playerData;

  const player = {
    name,
    profileImage,
    mark: {
      value,
      cellContent:
        theme === 'Medieval'
          ? `<img src="./ui/weapons/sword.png" alt="${value}" style="width:60px;background:blue;height:60px">`
          : theme === 'Futuristic'
          ? `<img src="./ui/weapons/spacecraft.png" alt="${value}" style="width:60px;background:blue;height:60px">`
          : `<img src="./ui/weapons/gun.png" alt="${value}" style="width:60px;background:blue;height:60px">`,
    },
    points: 0,
  };

  const getName = () => player.name;

  const getMark = () => player.mark;

  const setMark = (value) => (player.mark = value);

  const getPoints = () => player.points;

  const setPoints = (value) => (player.points = value);

  return { getName, getMark, setMark, getPoints, setPoints };
}
