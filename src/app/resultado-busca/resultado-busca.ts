import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalogoService } from '../service/catalogo';
import { CestaService } from '../service/cesta';
import { Produto } from '../model/produto';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-resultado-busca',
  styleUrl: './resultado-busca.css',
  templateUrl: './resultado-busca.html',
})
export class ResultadoBusca implements OnInit {
  private rota = inject(ActivatedRoute);
  private catalogo = inject(CatalogoService);
  private cestaService = inject(CestaService);
  termo = signal('');
  resultado = signal<Produto[]>([]);

  ngOnInit(): void {
    this.rota.queryParamMap.subscribe(p => {
      const t = p.get('q') ?? '';
      this.termo.set(t);
      if (t) {
        this.catalogo.buscar(t).subscribe({
          next: (produtos) => {
            this.resultado.set(produtos);
          },
          error: (err) => console.error('Erro ao realizar busca:', err)
        });
      } else {
        this.resultado.set([]);
      }
    });
  }

  comprar(produto: Produto) {
    this.cestaService.adicionar(produto);
  }
}