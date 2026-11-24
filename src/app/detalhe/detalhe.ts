import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CatalogoService } from '../service/catalogo';
import { CestaService } from '../service/cesta';
import { Produto } from '../model/produto';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})
export class Detalhe implements OnInit {
  private rota = inject(ActivatedRoute);
  private router = inject(Router);
  private catalogoService = inject(CatalogoService);
  private cestaService = inject(CestaService);

  disco = signal<Produto | undefined>(undefined);
  carregando = signal(true);

  ngOnInit(): void {
    const codigo = Number(this.rota.snapshot.paramMap.get('codigo'));
    if (!codigo) {
      this.carregando.set(false);
      return;
    }
    this.catalogoService.obter(codigo).subscribe({
      next: (produto) => {
        this.disco.set(produto);
        this.carregando.set(false);
      },
      error: (err) => {
        console.error('Erro ao carregar detalhes do disco:', err);
        this.carregando.set(false);
      },
    });
  }

  comprar() {
    const d = this.disco();
    if (d) {
      this.cestaService.adicionar(d);
      this.router.navigate(['/cesta']);
    }
  }
}