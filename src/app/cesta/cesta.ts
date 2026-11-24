import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../service/cesta';
import { ItemCesta } from '../model/item-cesta';

@Component({
  selector: 'app-cesta',
  imports: [CommonModule],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css',
})
export class Cesta {
  private cestaService = inject(CestaService);
  finalizado = false;

  get cesta() {
    return this.cestaService.cesta;
  }

  get total() {
    return this.cestaService.total;
  }

  subtotal(item: ItemCesta): number {
    return this.cestaService.preco(item.produto) * item.quantidade;
  }

  limpar() {
    this.cestaService.limpar();
  }

    aumentar(item: ItemCesta) {
    if (item.quantidade < item.produto.quantidade) {
      item.quantidade++;
    }
  }

  diminuir(item: ItemCesta) {
    if (item.quantidade > 1) {
      item.quantidade--;
    } else {
      this.cesta.itens.splice(this.cesta.itens.indexOf(item), 1);
    }
  }

  finalizar() {
    this.cestaService.limpar();
    this.finalizado = true;
  }
}
