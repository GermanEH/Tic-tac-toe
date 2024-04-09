function Player() {
  const player = {
    name: '',
    mark: '',
    points: 0,
  };

  const getName = () => player.name;

  const setName = (value) => (player.name = value);

  const getMark = () => player.points;

  const setMark = (value) => (player.points = value);

  const getPoints = () => player.mark;

  const setPoints = (value) => (player.mark = value);

  return { getName, setName, getMark, setMark, getPoints, setPoints };
}
