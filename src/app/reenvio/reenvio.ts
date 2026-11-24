import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-reenvio',
  styleUrl: './reenvio.css',
  templateUrl: './reenvio.html',
})
export class Reenvio {
  tentou = false;
  enviado = false;

  enviar(form: HTMLFormElement) {
    this.tentou = true;
    this.enviado = form.checkValidity();
  }
}
