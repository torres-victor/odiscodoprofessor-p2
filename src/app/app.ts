import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { BarraBusca } from './barra-busca/barra-busca';
import { CestaService } from './service/cesta';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, BarraBusca],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly cestaService = inject(CestaService);
}
