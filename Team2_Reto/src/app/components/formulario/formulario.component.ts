// src/app/components/formulario/formulario.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { NavbarComponent } from '../../paginas/navbar/navbar.component';
import { NgFor } from '@angular/common';

interface FormOption {
  value: string;
  label: string;
  imageUrl: string;
}

type FormId = 's1-p1' | 's1-p2' | 's2-p1' | 's2-p2' | 's3-p1' | 's3-p2' | 's4-p1' | 's4-p2' | 's5-p1' | 's5-p2' | 's6-p1'; // Asegúrate de incluir todos los IDs de formularios

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [NavbarComponent, NgFor],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  opciones: FormOption[] = [];
  siguienteRuta: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const formId = this.route.snapshot.paramMap.get('id') as string;
    if (this.isFormId(formId)) {
      this.opciones = this.dataService.getFormOptions(formId);
      this.siguienteRuta = this.dataService.getNextRoute(formId);
    } else {
      console.error(`Invalid formId: ${formId}`);
      this.router.navigate(['/']);
    }
  }

  validarSeleccion(): void {
    const radios = document.getElementsByName('card') as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        const formId = this.route.snapshot.paramMap.get('id') as FormId;
        if (this.isFormId(formId)) {
          console.log(radios[i].value)
          this.dataService.setSelectedValue(formId, radios[i].value);
          this.router.navigate([this.siguienteRuta]).then(() => {
            window.location.reload();  // Recarga la página después de la navegación
          });// Navega sin recargar la página
        }
        return;
      }
    }
    alert('Por favor, selecciona una opción.');
  }
  

  

  private isFormId(value: string): value is FormId {
    return ['s1-p1', 's1-p2', 's2-p1', 's2-p2', 's3-p1', 's3-p2', 's4-p1', 's4-p2', 's5-p1', 's5-p2', 's6-p1'].includes(value);
  }
}
