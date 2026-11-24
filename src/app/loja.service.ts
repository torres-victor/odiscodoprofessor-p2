import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

export interface ClienteLoginPayload {
  email: string;
  senha: string;
}

@Injectable({ providedIn: 'root' })
export class LojaService {
  private url = 'http://localhost:8081/api';

  usuarioLogado = signal<any>(null);
  mensagemLogin = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  fazerLogin(credenciais: ClienteLoginPayload) {
    return this.http.post<any>(`${this.url}/cliente/login`, credenciais).pipe(
      tap((cliente) => {
        if (cliente && cliente.codigo > 0) {
          this.usuarioLogado.set(cliente);
          this.mensagemLogin.set('Login realizado com sucesso.');
          if (typeof window !== 'undefined') {
            localStorage.setItem('clienteLogado', JSON.stringify(cliente));
          }
        }
      })
    );
  }

  salvarCliente(cliente: any) {
    return this.http.post(`${this.url}/cliente`, cliente, { responseType: 'text' });
  }

  salvarPedido(pedido: any) {
    return this.http.post(`${this.url}/pedido`, pedido, { responseType: 'text' });
  }

  listarPedidos(codigoCliente?: number) {
    const endpoint = codigoCliente
      ? `${this.url}/pedido/cliente/${codigoCliente}`
      : `${this.url}/pedido`;
    return this.http.get<any[]>(endpoint);
  }
}