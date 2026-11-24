import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LojaService {
  private url = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  salvarCliente(cliente: any) {
    return this.http.post(`${this.url}/cliente`, cliente, { responseType: 'text' });
  }

  salvarPedido(pedido: any) {
    return this.http.post(`${this.url}/pedido`, pedido, { responseType: 'text' });
  }
}