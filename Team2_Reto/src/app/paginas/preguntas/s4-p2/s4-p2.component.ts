import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-s4-p2',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './s4-p2.component.html',
  styleUrl: './s4-p2.component.css'
})
export class S4P2Component {

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
      this.router.navigate(['/preguntas/s5-p1']);  // Navega si hay una opción seleccionada
    } else {
      alert('Por favor, selecciona una opción.');  // Muestra alerta si no hay selección
    }
  }
}
