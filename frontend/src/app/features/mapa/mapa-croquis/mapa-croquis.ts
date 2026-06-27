import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Icono } from '../../../shared/components/icono/icono';

interface InfoEdificio {
  id: string;
  nombre: string;
}

@Component({
  selector: 'app-mapa-croquis',
  imports: [CommonModule, Icono],
  templateUrl: './mapa-croquis.html',
  styleUrl: './mapa-croquis.scss'
})
export class MapaCroquis {
  @ViewChild('contenedor') contenedorRef!: ElementRef<HTMLDivElement>;
  @ViewChild('svgWrapper') svgWrapperRef!: ElementRef<HTMLDivElement>;

  escala: number = 1;
  escalaMinima: number = 0.4;
  origenX: number = 50;
  origenY: number = 50;
  edificioSeleccionado: InfoEdificio | null = null;

  isDragging: boolean = false;
  startX: number = 0;
  startY: number = 0;
  scrollLeft: number = 0;
  scrollTop: number = 0;

  nombreEdificios: { [key: string]: string } = {
    'Cecyte': 'CECYTE',
    'Aulas-de-disenio': 'Aulas de Diseño',
    'Aulas-modulo-1': 'Aulas Módulo 1',
    'Aulas-modulo-2': 'Aulas Módulo 2',
    'Aulas-modulo-3': 'Aulas Módulo 3',
    'Aulas-modulo-4': 'Aulas Módulo 4',
    'Aulas-modulo-5': 'Aulas Módulo 5',
    'Aulas-modulo-6': 'Aulas Módulo 6',
    'Auditorio': 'Auditorio',
    'biblioteca': 'Biblioteca',
    'Casa-de-rector': 'Casa del Rector',
    'Cubiculos-de-profesores': 'Cubículos de Profesores',
    'Centro-de-idiomas': 'Centro de Idiomas',
    'Departamento-de-profesores': 'Departamento de Profesores',
    'Edificio-de-ingenieria-industrial': 'Edificio de Ingeniería Industrial',
    'Edificio-de-posgrado': 'Edificio de Posgrado',
    'Estatua': 'Estatua',
    'Instituto-de-energia': 'Instituto de Energía',
    'Laboratorio-de-electronica': 'Laboratorio de Electrónica',
    'Laboratorio-de-energia': 'Laboratorio de Energía',
    'Laboratorio-de-ingenieria-quimica': 'Laboratorio de Ingeniería Química',
    'Laboratorio-de-quimica': 'Laboratorio de Química',
    'Laboratorio-de-quimica-organica': 'Laboratorio de Química Orgánica',
    'Modulo-de-aulas-1': 'Módulo de Aulas 1',
    'Modulo-de-aulas-2': 'Módulo de Aulas 2',
    'Portico-de-acceso': 'Pórtico de Acceso',
    'Rectoria': 'Rectoría',
    'Sala-de-autoacceso': 'Sala de Autoacceso',
    'Salas-de-computo': 'Salas de Cómputo',
    'Sanitarios-generales': 'Sanitarios Generales',
    'Talleres-de-disenio': 'Talleres de Diseño',
    'Vicerrectoria-academica': 'Vicerrectoría Académica',
    'Vicerrectoria-administrativa': 'Vicerrectoría Administrativa',
    'Caseta-de-inversores': 'Caseta de Inversores',
    'Sistema-fotovoltaico': 'Sistema Fotovoltaico',
    'path33': 'Recursos Materiales',
    'path38': 'Sistema Fotovoltaico',
    'path39': 'Sistema Fotovoltaico',
    'path40': 'Sistema Fotovoltaico',
    'path41': 'Cancha de Basquetbol',
    'path42': 'Terreno de la Cancha',
  };

  constructor(private router: Router) {}

  calcularEscalaMinima(): number {
    const contenedor = this.contenedorRef?.nativeElement;
    const wrapper = this.svgWrapperRef?.nativeElement;
    if (!contenedor || !wrapper) return 0.4;

    const svg = wrapper.querySelector('svg');
    if (!svg) return 0.4;

    const svgW = svg.clientWidth || 1843;
    const svgH = svg.clientHeight || 1152;
    const contW = contenedor.clientWidth;
    const contH = contenedor.clientHeight;

    const escalaX = contW / svgW;
    const escalaY = contH / svgH;
    return +Math.min(escalaX, escalaY).toFixed(2);
  }

  acercar() {
    if (this.escala < 3) {
      this.escala = +(this.escala + 0.2).toFixed(1);
    }
  }

  alejar() {
    const minima = this.calcularEscalaMinima();
    if (this.escala > minima) {
      this.escala = +Math.max(this.escala - 0.2, minima).toFixed(2);
    }
  }

 
  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    event.preventDefault();
    const contenedor = this.contenedorRef?.nativeElement;
    if (!contenedor) return;

    const rect = contenedor.getBoundingClientRect();
    
    this.origenX = ((event.clientX - rect.left) / rect.width) * 100;
    this.origenY = ((event.clientY - rect.top) / rect.height) * 100;

    const delta = event.deltaY > 0 ? -0.1 : 0.1;
    const minima = this.calcularEscalaMinima();
    const nueva = +(this.escala + delta).toFixed(1);

    if (nueva >= minima && nueva <= 3) {
      this.escala = nueva;
    }
  }

  seleccionarEdificio(event: MouseEvent) {
    document.querySelectorAll('.edificio.seleccionado')
      .forEach(el => el.classList.remove('seleccionado'));

    const target = event.target as SVGElement;
    const edificio = target.closest('.edificio') as SVGElement | null;

    if (edificio) {
      edificio.classList.add('seleccionado');
      const id = edificio.id;
      this.edificioSeleccionado = {
        id,
        nombre: this.nombreEdificios[id] || id
      };
    } else {
      this.edificioSeleccionado = null;
    }
  }

  irAGoogleMaps() {
    this.router.navigate(['/mapa-google']);
  }

  cerrarInfo() {
    this.edificioSeleccionado = null;
  }

  onMouseDown(event: MouseEvent) {
    const contenedor = this.contenedorRef.nativeElement;
    this.isDragging = true;
    this.startX = event.pageX - contenedor.offsetLeft;
    this.startY = event.pageY - contenedor.offsetTop;
    this.scrollLeft = contenedor.scrollLeft;
    this.scrollTop = contenedor.scrollTop;
    this.contenedorRef.nativeElement.classList.add('dragging');
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const contenedor = this.contenedorRef.nativeElement;
    const x = event.pageX - contenedor.offsetLeft;
    const y = event.pageY - contenedor.offsetTop;
    const walkX = x - this.startX;
    const walkY = y - this.startY;
    contenedor.scrollLeft = this.scrollLeft - walkX;
    contenedor.scrollTop = this.scrollTop - walkY;
  }

  onMouseUp(event: MouseEvent) {
    
    if (this.isDragging) {
      const x = event.pageX - this.contenedorRef.nativeElement.offsetLeft;
      const y = event.pageY - this.contenedorRef.nativeElement.offsetTop;
      const movedX = Math.abs(x - this.startX);
      const movedY = Math.abs(y - this.startY);
      if (movedX < 5 && movedY < 5) {
        this.seleccionarEdificio(event);
      }
    }
    this.isDragging = false;
    this.contenedorRef.nativeElement.classList.remove('dragging');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isDragging = false;
    this.contenedorRef.nativeElement.classList.remove('dragging');
  }
}