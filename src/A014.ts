// Intersection types

type HaveNome = { name: string };
type HaveSurname = { surname: string };
type HaveAge = { age: number };
type People = HaveAge & HaveSurname & HaveNome; // and. This is a intercection

const people: People = {
  name: 'Leo',
  age: 43,
  surname: 'basso',
};

export { people };
