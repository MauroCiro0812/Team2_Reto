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
  rutaAnterior: string = '';
  tituloPregunta: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    console.log('FormularioComponent cargado');
    const formId = this.route.snapshot.paramMap.get('id') as string;
    if (this.isFormId(formId)) {
      this.opciones = this.dataService.getFormOptions(formId);
      this.siguienteRuta = this.dataService.getNextRoute(formId);
      this.tituloPregunta = this.getTituloByFormId(formId);
    } else {
      console.error(`Invalid formId: ${formId}`);
      this.router.navigate(['/']);
    }
  }

  navigateToPlanes(): void {
    this.router.navigate(['/planes']);
  }

  isLastQuestion(): boolean {
    const formId = this.route.snapshot.paramMap.get('id') as FormId;
    return formId === 's6-p1'; // O cualquier otro ID de la última pregunta
  }


  private getTituloByFormId(formId: FormId): string {
    const titulos: { [key in FormId]: string } = {
      's1-p1': '¿Qué tipo de entorno prefieres para tus vacaciones?',
      's1-p2': '¿Te gustaría explorar un destino internacional o nacional?',
      's2-p1': '¿Qué clima prefieres durante tus vacaciones?',
      's2-p2': '¿Te molesta la lluvia en tus vacaciones?',
      's3-p1': '¿Qué tipo de actividades prefieres hacer durante tus vacaciones?',
      's3-p2': '¿Te gusta disfrutar de la gastronomía local durante tus viajes?',
      's4-p1': '¿Qué tipo de alojamiento prefieres?',
      's4-p2': '¿Te importa si el alojamiento está en el centro de la ciudad o prefieres las afueras?',
      's5-p1': '¿Cuánto tiempo planeas quedarte de vacaciones?',
      's5-p2': '¿Cuántos días de actividades intensas puedes disfrutar antes de necesitar un descanso?',
      's6-p1': '¿Cuál es tu rango de edad?',
    };
    return titulos[formId];
  }


  validarSeleccion(): void {
    const radios = document.getElementsByName('card') as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        const formId = this.route.snapshot.paramMap.get('id') as FormId;
        if (this.isFormId(formId)) {
          console.log(radios[i].value)
          this.dataService.setSelectedValue(formId, radios[i].value);
          console.log(formId)
          sessionStorage.setItem(formId,radios[i].value)
          this.router.navigate([this.siguienteRuta]).then(() => {
          window.location.reload();  // Recarga la página después de la navegación
          });// Navega sin recargar la página
        }
        return;
      }
    }
    alert('Por favor, selecciona una opción.');
  }
  
  rutas = ['s1-p1', 's1-p2', 's2-p1', 's2-p2', 's3-p1', 's3-p2', 's4-p1', 's4-p2', 's5-p1', 's5-p2', 's6-p1'];
 
  irAnterior(): void {
    const formId = this.route.snapshot.paramMap.get('id') as FormId;
    const previousRoute = this.dataService.getPreviousRoute(formId);
    if (previousRoute) {
      this.router.navigate([previousRoute]).then(() => {
        window.location.reload();
      });
    } else {
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    }
  }

  estoyListo(): void {
    const radios = document.getElementsByName('card') as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        const formId = this.route.snapshot.paramMap.get('id') as FormId;
        if (this.isFormId(formId)) {
          this.dataService.setSelectedValue(formId, radios[i].value);
          // Aquí puedes agregar lógica adicional como guardar los datos o finalizar el flujo
          this.router.navigate(['/planes']);
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
