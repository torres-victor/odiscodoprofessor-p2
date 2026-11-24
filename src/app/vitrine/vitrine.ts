import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Produto } from '../model/produto';
import { CestaService } from '../service/cesta';
import { CatalogoService } from '../service/catalogo';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine implements OnInit {
  private cestaService = inject(CestaService);
  private catalogoService = inject(CatalogoService);
  private rota = inject(ActivatedRoute);

  promo = this.rota.snapshot.routeConfig?.path === 'promo';
  lista = signal<Produto[]>([]);

  ngOnInit(): void {
    this.catalogoService.listarTodos().subscribe({
      next: (dados: Produto[]) => {
        this.lista.set(dados.filter(p => !this.promo || p.valorPromo > 0));
      },
      error: (erro: any) => {
        console.error('Erro ao carregar produtos do banco de dados:', erro);
      }
    });
  }

  comprar(produto: Produto) {
    this.cestaService.adicionar(produto);
  }
}