import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-s3-p1',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './s3-p1.component.html',
  styleUrl: './s3-p1.component.css'
})
export class S3P1Component {

  constructor(private router: Router) {}

  validarSeleccion(): void {
    const radios = document.getElementsByName('card') as NodeListOf<HTMLInputElement>;
    let seleccionado = false;

    // Recorre todos los radio buttons para ver si alguno está seleccionado
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        seleccionado = true;
        break;
      }
    }

    if (seleccionado) {
      this.router.navigate(['/preguntas/s3-p2']);  // Navega si hay una opción seleccionada
    } else {
      alert('Por favor, selecciona una opción.');  // Muestra alerta si no hay selección
    }
  }
}
