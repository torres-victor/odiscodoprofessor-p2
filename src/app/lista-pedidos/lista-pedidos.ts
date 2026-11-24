import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaService } from '../loja.service';

@Component({
  imports: [CommonModule],
  selector: 'app-lista-pedidos',
  styleUrl: './lista-pedidos.css',
  templateUrl: './lista-pedidos.html',
})
export class ListaPedidos implements OnInit {
  lojaService = inject(LojaService);
  pedidos = signal<any[]>([]);
  carregando = signal(true);

  ngOnInit(): void {
    let usuario = this.lojaService.usuarioLogado();

    if (!usuario && typeof window !== 'undefined') {
      const salvo = localStorage.getItem('clienteLogado');
      if (salvo) {
        usuario = JSON.parse(salvo);
        this.lojaService.usuarioLogado.set(usuario);
      }
    }

    if (!usuario?.codigo) {
      this.carregando.set(false);
      return;
    }

    this.lojaService.listarPedidos(usuario.codigo).subscribe({
      next: (dados) => {
        const lista = Array.isArray(dados) ? dados : [];
        this.pedidos.set(
          lista.filter((p) => {
            const codCli = p.codigoCliente ?? p.idCliente ?? p.cliente?.codigo;
            return !codCli || codCli === usuario.codigo;
          })
        );
        this.carregando.set(false);
      },
      error: (err) => {
        console.error('Erro ao buscar pedidos:', err);
        this.carregando.set(false);
      },
    });
  }
}