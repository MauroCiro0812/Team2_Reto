import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css', '../preguntas/s1-p1/s1-p1.component.css']
})
export class PlanesComponent {

}
