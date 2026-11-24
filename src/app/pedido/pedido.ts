import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaService } from '../loja.service'; // ajuste o caminho se loja.service.ts estiver em outra pasta

@Component({
  imports: [CommonModule],
  selector: 'app-pedido',
  styleUrl: './pedido.css',
  templateUrl: './pedido.html',
})
export class Pedido {
  private lojaService = inject(LojaService);

  salvo = false;

  gravarPedido(form: HTMLFormElement) {
    const valorTotal = Number((form.elements.namedItem('txtValorTotal') as HTMLInputElement | null)?.value ?? 0);
    const entrega = (form.elements.namedItem('txtEntrega') as HTMLInputElement | null)?.value.trim() ?? '';
    const obs = (form.elements.namedItem('txtObs') as HTMLInputElement | null)?.value.trim() ?? '';
    const codigoCliente = Number((form.elements.namedItem('txtCodigoCliente') as HTMLInputElement | null)?.value ?? 1);
    const dataPedido = new Date().toISOString().split('T')[0];

    const pedido = {
      valorTotal,
      entrega,
      obs,
      dataPedido,
      codigoCliente,
    };

    this.lojaService.salvarPedido(pedido).subscribe({
      next: (res) => {
        console.log(res);
        this.salvo = true;
        alert(res);
      },
      error: (err) => {
        console.error(err);
        this.salvo = false;
        alert('Erro ao salvar pedido no backend.');
      },
    });
  }
}