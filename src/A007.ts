// Type Null and Undefined

let x;

if (typeof x === 'undefined') x = 20;

export function createName(
  firstName: string,
  Surname?: string,
): {
  firstName: string;
  Surname?: string;
} {
  return {
    firstName,
    Surname,
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function squareOf(x: any) {
  if (typeof x === 'number') return x * 2;
  return 'This is not a number';
}

console.log(squareOf('E'));
