import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { DataService } from '../../services/data.service';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [CommonModule, NavbarComponent, NgFor, NgIf],  // Asegúrate de incluir CommonModule aquí
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css', '../preguntas/s1-p1/s1-p1.component.css']
})
export class PlanesComponent implements OnInit {
  respuestas$: Observable<{ [key: string]: string | null }>;

  resultados:Array<unknown>=[];

  constructor(private dataService: DataService) {
    this.respuestas$ = this.dataService.getSelectedValues();
    this.resultados=dataService.getSelValues();
  }

  ngOnInit(): void {
    // No es necesario agregar nada aquí, pero puedes hacerlo si es necesario
  }
}
