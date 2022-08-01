export class People {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf;
  }
  set cpf(valueCpf: string) {
    this._cpf = valueCpf;
  }

  get cpf(): string {
    return this._cpf;
  }
}

const people = new People('Leo', 'Basso', 21, '50833943021-43');

console.log((people.cpf = '503924923'));
