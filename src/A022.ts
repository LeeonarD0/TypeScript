export class Empresa {
  readonly empresa: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.empresa = nome;
    this.cnpj = cnpj;
  }

  addColab(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColab(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  showName(): string {
    return this.empresa;
  }
}

export class Colaborador {
  constructor(readonly nome: string, readonly sobrenome: string) {}
}

const empresa1 = new Empresa('Basso', '43426543/12312.453');
const colab1 = new Colaborador('leo', 'basso');
const colab2 = new Colaborador('davide', 'basso');

const empresa2 = new Empresa('DORITOS', '43521*312');
empresa1.addColab(colab1);
empresa1.addColab(colab2);

empresa1.showColab();
