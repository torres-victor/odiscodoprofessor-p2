import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Produto } from '../model/produto';
import { CestaService } from '../service/cesta';
import { CatalogoService } from '../service/catalogo';
import { LojaService } from '../loja.service'; // ajuste o caminho se loja.service.ts estiver em outra pasta

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine implements OnInit, OnDestroy {
  private cestaService = inject(CestaService);
  private catalogoService = inject(CatalogoService);
  private rota = inject(ActivatedRoute);
  lojaService = inject(LojaService);

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

  ngOnDestroy(): void {
    this.lojaService.mensagemLogin.set(null);
  }

  comprar(produto: Produto) {
    this.cestaService.adicionar(produto);
  }
}