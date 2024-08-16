import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Router } from '@angular/router';
import { DataService } from '../../../servicios/data.service';

@Component({
  selector: 'app-s1-p1',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './s1-p1.component.html',
  styleUrls: ['./s1-p1.component.css']
})
export class S1P1Component {

  constructor(private router: Router, private dataService: DataService) {}

  validarSeleccion(): void {
    const radios = document.getElementsByName('card') as NodeListOf<HTMLInputElement>;
    let seleccionado = false;

    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        seleccionado = true;
        this.dataService.setSelectedValue(radios[i].value); // Guarda el valor seleccionado
        break;
      }
    }

    if (seleccionado) {
      this.router.navigate(['/preguntas/s1-p2']);  // Navega si hay una opción seleccionada
    } else {
      alert('Por favor, selecciona una opción.');  // Muestra alerta si no hay selección
    }
  }
}
