export default function Weapons(theme) {
  let weapons = [];

  theme === 'Medieval'
    ? (weapons = [
        {
          value: 'sword',
          src: './ui/weapons/sword.png',
        },
        {
          value: 'pike',
          src: './ui/weapons/medieval_pike.png',
        },
        {
          value: 'bow',
          src: './ui/weapons/bow.png',
        },
      ])
    : theme === 'Futuristic'
    ? (weapons = [
        {
          value: 'spacecraft',
          src: './ui/weapons/spacecraft.png',
        },
        {
          value: 'laser gun',
          src: './ui/weapons/laser_gun.png',
        },
        {
          value: 'sci-fi sword',
          src: './ui/weapons/sci-fi_sword.png',
        },
      ])
    : (weapons = [
        {
          value: 'gun',
          src: './ui/weapons/gun.png',
        },
        {
          value: 'musket',
          src: './ui/weapons/musket.png',
        },
        {
          value: 'british saber',
          src: './ui/weapons/british_saber.png',
        },
      ]);

  return weapons;
}
