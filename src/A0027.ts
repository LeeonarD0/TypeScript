export class People {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected _cpf: string,
  ) {}
  static CreatePeople(nome: string, surname: string): People {
    return new People('LEO', 'BASSO', 0, '4325151');
  }
}

const people = new People('Leo', 'Basso', 21, '50833943021-43');
const people1 = People.CreatePeople('Davide', 'Basso');
