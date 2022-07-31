// Type Alias

type Age = number;
type People = {
  name: string;
  age: number;
  salary: number;
  favColor?: string;
};

type ColorRGB = 'RED' | 'GREEN' | 'BLUE';
type ColorBPY = 'Blue' | 'Pink' | 'yellow';
type FavColor = ColorBPY | ColorRGB;

///////////////////////////////////////////////

const people: People = {
  age: 30,
  name: 'LeO',
  salary: 4324,
};

export function setFavColor(people: People, color: FavColor): People {
  return { ...people, favColor: color };
}

console.log(setFavColor(people, 'Pink'));

export default 1;
