// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type FormId = 's1-p1' | 's1-p2' | 's2-p1' | 's2-p2' | 's3-p1' | 's3-p2' | 's4-p1' | 's4-p2' | 's5-p1' | 's5-p2' | 's6-p1'; // Agrega más IDs conforme vayas teniendo más formularios.

interface FormOption {
  value: string;
  label: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedValues = new BehaviorSubject<{ [key in FormId]: string | null }>({
    's1-p1': null,
    's1-p2': null,
    's2-p1': null,
    's2-p2': null,
    's3-p1': null,
    's3-p2': null,
    's4-p1': null,
    's4-p2': null,
    's5-p1': null,
    's5-p2': null,
    's6-p1': null,
  });
  private formOptions: { [key in FormId]: FormOption[] } = {
    's1-p1': [
      { value: 'playa', label: 'Playa', imageUrl: '../../../../assets/Imagenes/1-playa.jpg' },
      { value: 'montaña', label: 'Montaña', imageUrl: '../../../../assets/Imagenes/2-montaña.jpg' },
      { value: 'ciudad', label: 'Ciudad', imageUrl: '../../../../assets/Imagenes/3-ciudad.jpg' }
    ],
    's1-p2': [
      { value: 'internacional', label: 'Internacional', imageUrl: '../../../../assets/Imagenes/internacional.jpg' },
      { value: 'nacional', label: 'Nacional', imageUrl: '../../../../assets/Imagenes/nacional.jpg' },
      { value: 'indiferente', label: 'Indiferente', imageUrl: '../../../../assets/Imagenes/indiferente.jpg' }
    ],
    's2-p1': [
      { value: 'caluroso', label: 'Caluroso', imageUrl: '../../../../assets/Imagenes/Calor.jpg' },
      { value: 'templado', label: 'Templado', imageUrl: '../../../../assets/Imagenes/Templado.jpg' },
      { value: 'frio', label: 'Frio', imageUrl: '../../../../assets/Imagenes/Frio.png' }
    ],
    's2-p2': [
      { value: 'seco', label: 'Si, prefiero clima seco', imageUrl: '../../../../assets/Imagenes/1.seco.jpg' },
      { value: 'lluvia', label: 'No me importa un poco de lluvia', imageUrl: '../../../../assets/Imagenes/2.lluvia.jpg' },
      { value: 'ocasional', label: 'Prefiero destinos con lluvias ocasionales', imageUrl: '../../../../assets/Imagenes/3.lluvias-ocasionales.jpg' }
    ],
    's3-p1': [
      { value: 'deporte', label: 'Deporte y Aventuras', imageUrl: '../../../../assets/Imagenes/Deporte y Aventura.jpg' },
      { value: 'cultura', label: 'Cultura y Museo', imageUrl: '../../../../assets/Imagenes/Museo-Cultura.jpg' },
      { value: 'relax', label: 'Relax y Bienestar', imageUrl: '../../../../assets/Imagenes/Relax y bienestar.jpg' }
    ],
    's3-p2': [
      { value: 'local', label: 'Si,es muy importante para mi', imageUrl: '../../../../assets/Imagenes/comida local.jpg' },
      { value: 'neutra', label: 'Me gusta probar cosas nuevas, pero no es lo principal', imageUrl: '../../../../assets/Imagenes/comida neutra.jpg' },
      { value: 'familiar', label: 'No, prefiero comida mas familiar', imageUrl: '../../../../assets/Imagenes/comida familiar.jpg' }
    ],
    's4-p1': [
      { value: 'lujo', label: 'Hotel de Lujo', imageUrl: '../../../../assets/Imagenes/lujo.jpg' },
      { value: 'hostal', label: 'Hostal o Albergue', imageUrl: '../../../../assets/Imagenes/hostal.jpg' },
      { value: 'airbnb', label: 'Airbnb o Apartamento', imageUrl: '../../../../assets/Imagenes/airbnb.jpg' }
    ],
    's4-p2': [
      { value: 'ciudad', label: 'Centro de la Ciudad', imageUrl: '../../../../assets/Imagenes/a.ciudad.jpg' },
      { value: 'afueras', label: 'Afueras', imageUrl: '../../../../assets/Imagenes/b-afueras.jpg' },
      { value: 'indiferente', label: 'Indiferente', imageUrl: '../../../../assets/Imagenes/c.indiferente.jpg' }
    ],
    's5-p1': [
      { value: 'menos', label: 'Menos de una Semana', imageUrl: '../../../../assets/Imagenes/menos-de-2-semanas.jpg' },
      { value: 'una', label: 'Una o Dos Semanas', imageUrl: '../../../../assets/Imagenes/1-a-2-semanas.jpg' },
      { value: 'dos', label: 'Mas de Dos Semanas', imageUrl: '../../../../assets/Imagenes/mas-de-2-semanas.jpg' }
    ],
    's5-p2': [
      { value: 'uno', label: '1 - 2 Dias', imageUrl: '../../../../assets/Imagenes/1-2días.jpg' },
      { value: 'tres', label: '3 - 5 Dias', imageUrl: '../../../../assets/Imagenes/3-5dias.jpg' },
      { value: 'cinco', label: 'Mas de 5 Dias', imageUrl: '../../../../assets/Imagenes/mas5días.jpg' }
    ],
    's6-p1': [
      { value: 'menos30', label: 'Menos de 30 años', imageUrl: '../../../../assets/Imagenes/30years.jpg' },
      { value: 'treinta', label: '30 a 50 años', imageUrl: '../../../../assets/Imagenes/30-50years.jpg' },
      { value: 'mas50', label: 'Mas de 50 años', imageUrl: '../../../../assets/Imagenes/mas-de-50.jpg' }
    ],
    // Agrega más opciones para otros formularios aquí
  };

  private nextRoutes: { [key in FormId]: string } = {
    's1-p1': '/preguntas/s1-p2',
    's1-p2': '/preguntas/s2-p1',
    's2-p1': '/preguntas/s2-p2',
    's2-p2': '/preguntas/s3-p1',
    's3-p1': '/preguntas/s3-p2',
    's3-p2': '/preguntas/s4-p1',
    's4-p1': '/preguntas/s4-p2',
    's4-p2': '/preguntas/s5-p1',
    's5-p1': '/preguntas/s5-p2',
    's5-p2': '/preguntas/s6-p1',
    's6-p1': '/planes'
    // Define más rutas para otros formularios aquí
  };

  

  getFormOptions(formId: FormId): FormOption[] {
    return this.formOptions[formId] || [];
  }

  getNextRoute(formId: FormId): string {
    return this.nextRoutes[formId] || '/';
  }
  
  setSelectedValue(formId: FormId, value: string): void {
    const currentValues = this.selectedValues.value;
    currentValues[formId] = value;
    this.selectedValues.next(currentValues);
  }

  getSelectedValues(): Observable<{ [key in FormId]: string | null }> {
    return this.selectedValues.asObservable();
  }
}
