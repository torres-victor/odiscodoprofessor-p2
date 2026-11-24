import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LojaService } from '../loja.service'; // ajuste o caminho se necessário

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private lojaService = inject(LojaService);
  private router = inject(Router);

  tentou = false;
  ok = false;
  mostrarSenha = false;

  entrar(form: HTMLFormElement) {
    this.tentou = true;
    this.ok = form.checkValidity();

    if (!this.ok) return;

    const email = (form.elements.namedItem('txtEmail') as HTMLInputElement | null)?.value.trim() ?? '';
    const senha = (form.elements.namedItem('txtSenha') as HTMLInputElement | null)?.value ?? '';

    this.lojaService.fazerLogin({ email, senha }).subscribe({
      next: (cliente) => {
        if (cliente && cliente.codigo > 0) {
          this.ok = true;
          this.router.navigate(['/']);
        } else {
          this.ok = false;
          alert('E-mail ou senha inválidos (verifique se o cliente está ativo).');
        }
      },
      error: (err) => {
        console.error('Erro no login:', err);
        this.ok = false;
        alert('Erro ao conectar com o servidor de login.');
      },
    });
  }
}