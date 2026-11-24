import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-cadastro',
  styleUrl: './cadastro.css',
  templateUrl: './cadastro.html',
})
export class Cadastro {
  tentou = false;
  salvo = false;
  mostrarSenha = false;
  mostrarConfirma = false;

  gravar(form: HTMLFormElement) {
    const senha = form.elements.namedItem('txtSenha') as HTMLInputElement;
    const conf = form.elements.namedItem('txtConfirma') as HTMLInputElement;
    const cpf = form.elements.namedItem('txtCpf') as HTMLInputElement;
    conf.setCustomValidity(conf.value === senha.value ? '' : 'As senhas não conferem');
    cpf.setCustomValidity(this.cpfValido(cpf.value) ? '' : 'CPF inválido');
    this.tentou = true;
    this.salvo = form.checkValidity();
  }

  cpfValido(valor: string): boolean {
    const d = valor.replace(/\D/g, '');
    if (d.length !== 11 || /^(\d)\1{10}$/.test(d)) return false;
    for (const t of [9, 10]) {
      let soma = 0;
      for (let i = 0; i < t; i++) soma += Number(d[i]) * (t + 1 - i);
      if (((soma * 10) % 11) % 10 !== Number(d[t])) return false;
    }
    return true;
  }
}