// import { Routes } from '@angular/router';
// import { HomeComponent } from './paginas/home/home.component';
// import { S1P1Component } from './paginas/preguntas/s1-p1/s1-p1.component';
// import { S1P2Component } from './paginas/preguntas/s1-p2/s1-p2.component';
// import { S2P1Component } from './paginas/preguntas/s2-p1/s2-p1.component';
// import { S2P2Component } from './paginas/preguntas/s2-p2/s2-p2.component';
// import { S3P1Component } from './paginas/preguntas/s3-p1/s3-p1.component';
// import { S3P2Component } from './paginas/preguntas/s3-p2/s3-p2.component';
// import { S4P1Component } from './paginas/preguntas/s4-p1/s4-p1.component';
// import { S4P2Component } from './paginas/preguntas/s4-p2/s4-p2.component';
// import { S5P1Component } from './paginas/preguntas/s5-p1/s5-p1.component';
// import { S5P2Component } from './paginas/preguntas/s5-p2/s5-p2.component';
// import { S6P1Component } from './paginas/preguntas/s6-p1/s6-p1.component';
// import { PlanesComponent } from './paginas/planes/planes.component';

// export const routes: Routes = [
//     {path:'', component:HomeComponent},
//     {path:'preguntas/s1-p1', component:S1P1Component},
//     {path:'preguntas/s1-p2', component:S1P2Component},
//     {path:'preguntas/s2-p1', component:S2P1Component},
//     {path:'preguntas/s2-p2', component:S2P2Component},
//     {path:'preguntas/s3-p1', component:S3P1Component},
//     {path:'preguntas/s3-p2', component:S3P2Component},
//     {path:'preguntas/s4-p1', component:S4P1Component},
//     {path:'preguntas/s4-p2', component:S4P2Component},
//     {path:'preguntas/s5-p1', component:S5P1Component},
//     {path:'preguntas/s5-p2', component:S5P2Component},
//     {path:'preguntas/s6-p1', component:S6P1Component},
//     {path:'preguntas/planes', component:PlanesComponent}
// ];

// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './paginas/home/home.component';
import { PlanesComponent } from './paginas/planes/planes.component';

export const routes: Routes = [
  { path: 'preguntas/:id', component: FormularioComponent },
  { path: '', component: HomeComponent},
  { path: 'planes', component: PlanesComponent}
  // { path: '', redirectTo: 'preguntas/s1-p1', pathMatch: 'full' }, // Ruta por defecto
  // Otras rutas según sea necesario
];
