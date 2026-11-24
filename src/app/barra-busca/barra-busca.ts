import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'app-barra-busca',
  styleUrl: './barra-busca.css',
  templateUrl: './barra-busca.html',
})
export class BarraBusca {
  private router = inject(Router);
  erro = false;

  buscar(termo: string) {
    termo = termo.trim();
    this.erro = termo.length < 2;
    if (!this.erro) {
      this.router.navigate(['/resultadobusca'], { queryParams: { q: termo } });
    }
  }
}
