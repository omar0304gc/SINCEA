import { Component, ElementRef, ViewChild, HostListener, inject, OnInit, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Icono } from '../../../shared/components/icono/icono';

interface InfoEdificio {
  id: string;
  nombre: string;
  descripcion?: string | null;
  ubicacion?: string | null;
}

@Component({
  selector: 'app-mapa-croquis',
  standalone: true,
  imports: [CommonModule, Icono],
  templateUrl: './mapa-croquis.html',
  styleUrl: './mapa-croquis.scss'
})
export class MapaCroquis {
  @ViewChild('contenedor') contenedorRef!: ElementRef<HTMLDivElement>;
  @ViewChild('svgWrapper') svgWrapperRef!: ElementRef<HTMLDivElement>;

  private router = inject(Router);
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private apiUrl = 'http://localhost:3000/api/edificios';

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
    const edificioSVG = target.closest('.edificio') as SVGElement | null;

    if (edificioSVG) {
      edificioSVG.classList.add('seleccionado');
      const idElemento = edificioSVG.id;

      this.http.get<any>(this.apiUrl).subscribe({
        next: (response) => {
          if (response.status === 'success' && response.data) {
            
            const edificioBD = response.data.find((e: any) => e.id === idElemento);
            
            if (edificioBD) {
              this.edificioSeleccionado = {
                id: edificioBD.id,
                nombre: edificioBD.nombre,
                descripcion: edificioBD.descripcion,
                ubicacion: edificioBD.ubicacion
              };
            } else {
              
              this.edificioSeleccionado = { id: idElemento, nombre: `${idElemento}` };
            }
            this.cdr.detectChanges();
          }
        },
        error: (err) => {
          console.error('Error al consultar el edificio en el croquis:', err);
        }
      });
    } else {
      this.edificioSeleccionado = null;
      this.cdr.detectChanges();
    }
  }

  irAGoogleMaps() {
    this.router.navigate(['/mapa-google']);
  }

  cerrarInfo(){
    this.edificioSeleccionado = null;
    this.cdr.detectChanges();
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