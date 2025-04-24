import { Component, HostBinding, Input } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  imports: [],
  templateUrl: './destino-viaje.component.html',
  styleUrl: './destino-viaje.component.css'
})
export class DestinoViajeComponent {
  @Input() destino: DestinoViaje | undefined;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor(){
    
  }
}
