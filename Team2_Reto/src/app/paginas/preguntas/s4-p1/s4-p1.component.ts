import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-s4-p1',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './s4-p1.component.html',
  styleUrl: './s4-p1.component.css'
})
export class S4P1Component {

  validarSeleccion(event: Event): boolean {
    // Obtén todos los radio buttons con nombre "card"
    const radios = document.getElementsByName('card') as NodeListOf<HTMLInputElement>;
    let seleccionado = false;

    // Recorre todos los radio buttons para ver si alguno está seleccionado
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        seleccionado = true;
        break;
      }
    }

    // Si no hay ninguno seleccionado, muestra una alerta
    if (!seleccionado) {
      alert('Por favor, selecciona una opción.');
      event.preventDefault(); // Previene la navegación
      return false; // Previene la ejecución de cualquier acción posterior
    }

    return true; // Permite la ejecución de la acción si hay una opción seleccionada
  }
}
