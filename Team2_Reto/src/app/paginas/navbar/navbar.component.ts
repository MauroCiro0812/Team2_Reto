import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../home/home.component.css']
})
export class NavbarComponent {
  @ViewChild('userOptionsForms', { static: true }) userForms!: ElementRef;

  onSignupClick() {
    this.userForms.nativeElement.classList.remove('bounceRight');
    this.userForms.nativeElement.classList.add('bounceLeft');
  }

  onLoginClick() {
    this.userForms.nativeElement.classList.remove('bounceLeft');
    this.userForms.nativeElement.classList.add('bounceRight');
  }
}
