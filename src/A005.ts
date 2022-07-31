//  Arrays<T> - T[]

export function multiplyNumbers(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase<T>(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const UpperCase = toUpperCase('leonardo', 'davide');

const string = concatenString('Leo', 'Basso');

const result = multiplyNumbers(1, 4, 5);

console.log(result);

console.log(string);

console.log(UpperCase);
