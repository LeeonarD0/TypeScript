class People {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf() {
    return this.cpf;
  }

  getFullName() {
    return this.name + this.surname;
  }
}

export class Alumn extends People {
  constructor(
    name: string,
    surname: string,
    age: number,
    cpf: string,
    public sala: string,
  ) {
    super(name, surname, age, cpf);
    this.sala = sala;
  }
  getFullName(): string {
    console.log('testando');
    const result = super.getFullName();
    return result;
  }
}
export class Costumer extends People {
  getFullName(): string {
    return this.name + this.surname;
  }
}

const aluno = new Alumn('leo', 'basso', 43, '50432.432.534-31', '2C');
const costumer = new Costumer('leo', 'basso', 54, '50432.432.534-31');
const people = new People('davide', ' basso', 13, 'no cpf');

console.log(aluno);
console.log(costumer);
console.log(people);
