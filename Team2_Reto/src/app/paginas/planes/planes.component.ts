import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { DataService } from '../../servicios/data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [NavbarComponent, NgIf],
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css', '../preguntas/s1-p1/s1-p1.component.css']
})
export class PlanesComponent implements OnInit{

  selectedValue: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.selectedValue = this.dataService.getSelectedValue();
  }
}
