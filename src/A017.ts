/* Recomended */
// Conditional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type Assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

// HTMLElement

const input = document.querySelector('.input') as HTMLInputElement;

input.value = 'text';
input.focus();

/* No recomended */
// Non-NULLL assertion >>> (!)

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const body1 = document.querySelector('body')!;
body1.style.background = 'red';
