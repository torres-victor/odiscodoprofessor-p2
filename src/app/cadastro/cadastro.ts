import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaService } from '../loja.service'; // ajuste o caminho se loja.service.ts estiver em outra pasta

@Component({
  imports: [CommonModule],
  selector: 'app-cadastro',
  styleUrl: './cadastro.css',
  templateUrl: './cadastro.html',
})
export class Cadastro {
  private lojaService = inject(LojaService);

  tentou = false;
  salvo = false;
  mostrarSenha = false;
  mostrarConfirma = false;

  gravar(form: HTMLFormElement) {
    const nome = (form.elements.namedItem('txtNome') as HTMLInputElement | null)?.value.trim() ?? '';
    const email = (form.elements.namedItem('txtEmail') as HTMLInputElement | null)?.value.trim() ?? '';
    const senha = form.elements.namedItem('txtSenha') as HTMLInputElement;
    const conf = form.elements.namedItem('txtConfirma') as HTMLInputElement;
    const cpf = form.elements.namedItem('txtCpf') as HTMLInputElement;

    conf.setCustomValidity(conf.value === senha.value ? '' : 'As senhas não conferem');
    cpf.setCustomValidity(this.cpfValido(cpf.value) ? '' : 'CPF inválido');

    this.tentou = true;
    this.salvo = form.checkValidity();

    if (!this.salvo) return;

    const cliente = {
      nome,
      email,
      senha: senha.value,
      documento: cpf.value.replace(/\D/g, ''),
      ativo: 1,
    };

    this.lojaService.salvarCliente(cliente).subscribe({
      next: (res) => {
        console.log(res);
        alert(res);
      },
      error: (err) => {
        console.error(err);
        this.salvo = false;
        alert('Erro ao salvar cliente no backend.');
      },
    });
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