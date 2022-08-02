export class People {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected _cpf: string,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static CreatePeople(nome: string, surname: string): People {
    return new People('LEO', 'BASSO', 0, '4325151');
  }
}
