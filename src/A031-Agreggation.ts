export class Carrinho {
  private readonly produtos: Produto[] = [];

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProduto(): number {
    return this.produtos.length;
  }

  valorTotalDoCarrinho(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto = new Produto('Camiseta', 49.99);
const carrinho = new Carrinho();

carrinho.inserirProduto(produto, produto);

console.log(carrinho.valorTotalDoCarrinho());
console.log(carrinho.quantidadeProduto());
