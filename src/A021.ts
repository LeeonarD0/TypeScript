export class Empresa {
  public readonly empresa: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.empresa = nome;
    this.cnpj = cnpj;
  }

  addColab(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Basso', '43426543/12312.453');
const colab1 = new Colaborador('leo', 'basso');
const colab2 = new Colaborador('davide', 'basso');

const empresa2 = new Empresa('DORITOS', '43521*312');
empresa1.addColab(colab1);

console.log(empresa1);
