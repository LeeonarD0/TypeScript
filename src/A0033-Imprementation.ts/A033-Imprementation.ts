type TypePeople = {
  name: string;
  surname: string;
  fullName(): string;
};

export class People implements TypePeople {
  constructor(public name: string, public surname: string) {}

  fullName(): string {
    return this.name + this.surname;
  }
}

const people = new People('leo ', 'basso');
console.log(people.fullName());
