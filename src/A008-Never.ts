// type Never

export function createError(): never {
  throw new Error('Any Error');
}

createError();
