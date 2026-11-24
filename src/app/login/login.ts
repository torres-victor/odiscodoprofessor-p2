import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  tentou = false;
  ok = false;
  
  // Variável adicionada para controlar a visibilidade da senha
  mostrarSenha = false;

  entrar(form: HTMLFormElement) {
    this.tentou = true;
    this.ok = form.checkValidity();
  }
}