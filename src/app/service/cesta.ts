import { Injectable } from '@angular/core';
import { Cesta } from '../model/cesta';
import { ItemCesta } from '../model/item-cesta';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class CestaService {
  cesta: Cesta = {
    codigo: 1,
    cliente: "Cliente Teste",
    itens: []
  };

  adicionar(produto: Produto) {
    const existente = this.cesta.itens.find(i => i.produto.codigo === produto.codigo);

    if (existente) {
      existente.quantidade++;
    } else {
      const item = new ItemCesta();
      item.produto = produto;
      item.quantidade = 1;
      this.cesta.itens.push(item);
    }
  }

  limpar() {
    this.cesta.itens = [];
  }

  preco(p: Produto): number {
    return p.valorPromo > 0 ? p.valorPromo : p.valor;
  }

  get quantidade(): number {
    return this.cesta.itens.reduce((soma, i) => soma + i.quantidade, 0);
  }

  get total(): number {
    return this.cesta.itens.reduce(
      (soma, i) => soma + this.preco(i.produto) * i.quantidade, 0
    );
  }
}
