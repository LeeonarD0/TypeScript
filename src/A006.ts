// Type Tuple

const dataCostumer: [number, string?] = [1, 'Luiz'];
const dataCostumer2: [number, string, ...string[]] = [1, 'Luiz', 'teste'];

dataCostumer[0] = 100;
dataCostumer2[4] = 'test';
dataCostumer.pop();

console.log(dataCostumer);

// Readonly array

const array1: readonly string[] = ['leo', 'basso'];
const array2: ReadonlyArray<string> = ['leo', 'davide'];

console.log(array1);
console.log(array2);
