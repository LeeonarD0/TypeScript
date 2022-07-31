// literal types

// let x = 10;
// x = 0b1010;
// const y = 100;
// const a = 100;

// const people = {
//   name: 'Leo' as const,
//   surname: 'basso' as const,
// };

function chooseColor(color: 'red' | 'blue' | 'yellow') {
  return color;
}

console.log(chooseColor('blue'));

export default 1;
