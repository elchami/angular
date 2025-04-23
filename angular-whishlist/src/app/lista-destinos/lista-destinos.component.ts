import { Component } from '@angular/core';
import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-destinos',
  imports: [CommonModule, DestinoViajeComponent],
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.css'
})
export class ListaDestinosComponent {
  destinos: string[];

  constructor(){
    this.destinos = ['Barcelona','Buenos Aires','Lima', 'Barranquilla'];
  }
}
