import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../service/cesta';
import { LojaService } from '../loja.service';
import { ItemCesta } from '../model/item-cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
  cestaService = inject(CestaService);
  private lojaService = inject(LojaService);

  finalizado = false;

  get itens(): ItemCesta[] {
    return this.cestaService.cesta.itens;
  }

  get total(): number {
    return this.cestaService.total;
  }

  subtotal(item: ItemCesta): number {
    return this.cestaService.preco(item.produto) * item.quantidade;
  }

  aumentar(item: ItemCesta) {
    this.cestaService.adicionar(item.produto);
  }

  diminuir(item: ItemCesta) {
    if (item.quantidade > 1) {
      item.quantidade--;
    } else {
      const idx = this.itens.indexOf(item);
      if (idx > -1) {
        this.itens.splice(idx, 1);
      }
    }
  }

  limpar() {
    this.cestaService.limpar();
  }

  private obterClienteLogado() {
    let usuario = this.lojaService.usuarioLogado();
    if (!usuario && typeof window !== 'undefined') {
      const salvo = localStorage.getItem('clienteLogado');
      if (salvo) {
        usuario = JSON.parse(salvo);
        this.lojaService.usuarioLogado.set(usuario);
      }
    }
    return usuario;
  }

  finalizar() {
    const usuario = this.obterClienteLogado();
    if (!usuario?.codigo) {
      alert('Faça login antes de finalizar o pedido.');
      return;
    }

    if (this.itens.length === 0) return;

    const resumoItens = this.itens
      .map((i) => `${i.quantidade}x ${i.produto.nome}`)
      .join(', ');

    const novoPedido = {
      codigoCliente: usuario.codigo,
      dataPedido: new Date().toISOString().split('T')[0],
      entrega: 'Entrega padrão',
      obs: resumoItens,
      valorTotal: this.total,
    };

    this.lojaService.salvarPedido(novoPedido).subscribe({
      next: () => {
        this.limpar();
        this.finalizado = true;
      },
      error: (err) => {
        console.error('Erro ao gravar pedido:', err);
        alert('Erro ao gravar o pedido no servidor.');
      },
    });
  }
}