import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icono',
  imports: [CommonModule],
  templateUrl: './icono.html',
  styleUrl: './icono.scss'
})
export class Icono {
  @Input() nombre: string = '';
  @Input() clase: string = '';
  @Input() ancho: string = '24px';
  @Input() alto: string = '24px';
}