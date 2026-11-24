import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8081/api';

  // GET /api/produtos
  listarTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}/produtos`);
  }

  // GET /api/produto/vitrine (produtos em destaque)
  vitrine(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}/produto/vitrine`);
  }

  // GET /api/produto/{codigo}
  // O backend devolve um Produto vazio (codigo 0) quando não encontra.
  obter(codigo: number): Observable<Produto | undefined> {
    return this.http
      .get<Produto>(`${this.baseUrl}/produto/${codigo}`)
      .pipe(map(p => (p && p.codigo ? p : undefined)));
  }

  // GET /api/produto/busca/{termo}
  buscar(termo: string): Observable<Produto[]> {
    const t = termo.trim();
    if (!t) {
      return of([]);
    }
    return this.http.get<Produto[]>(
      `${this.baseUrl}/produto/busca/${encodeURIComponent(t)}`
    );
  }
}