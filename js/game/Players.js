function Player() {
  const player = {
    name: '',
    mark: '',
    points: 0,
  };

  const getName = () => player.name;

  const setName = (value) => (player.name = value);

  const getMark = () => player.mark;

  const setMark = (value) => (player.mark = value);

  const getPoints = () => player.points;

  const setPoints = (value) => (player.points = value);

  return { getName, setName, getMark, setMark, getPoints, setPoints };
}
