import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  label1: string[] = [ 'Agustin', 'In-Store Agustin', 'Mail-Order Agustin' ];
  label2: string[] = [ 'Juan', 'In-Store Juan', 'Mail-Order Juan' ];
  label3: string[] = [ 'Juli', 'In-Store juli', 'Mail-Order juli' ];
  label4: string[] = [ 'Lucas', 'In-Store Lucas', 'Mail-Order Lucas' ];
}
