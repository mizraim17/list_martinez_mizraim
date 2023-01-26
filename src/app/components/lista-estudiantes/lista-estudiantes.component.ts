import { Component } from '@angular/core';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.scss'],
})
export class ListaEstudiantesComponent {
  ListarEstudiantes: Estudiante[] = [
    {
      nombre: 'Baby Rick',
      grupo: 2,
      curso: 'Angular',
      calificacion: 4,
      aprobado: true,
      foto: 'https://rickandmortyapi.com/api/character/avatar/472.jpeg',
    },
    {
      nombre: 'Mr. Poopybutthole',
      grupo: 2,
      curso: 'React',
      calificacion: 4,
      aprobado: false,
      foto: 'https://rickandmortyapi.com/api/character/avatar/244.jpeg',
    },
    {
      nombre: 'Shleemypants',
      grupo: 2,
      curso: 'Node ',
      calificacion: 4,
      aprobado: false,
      foto: 'https://rickandmortyapi.com/api/character/avatar/313.jpeg',
    },
    {
      nombre: 'Secret Service Snake',
      grupo: 2,
      curso: 'Angular',
      calificacion: 4,
      aprobado: false,
      foto: 'https://rickandmortyapi.com/api/character/avatar/580.jpeg',
    },
    {
      nombre: 'Michael Jackson',
      grupo: 2,
      curso: 'Angular',
      calificacion: 4,
      aprobado: true,
      foto: 'https://rickandmortyapi.com/api/character/avatar/404.jpeg',
    },
    {
      nombre: 'Armothy',
      grupo: 2,
      curso: 'Angular',
      calificacion: 4,
      aprobado: true,
      foto: 'https://rickandmortyapi.com/api/character/avatar/25.jpeg',
    },
  ];
}
