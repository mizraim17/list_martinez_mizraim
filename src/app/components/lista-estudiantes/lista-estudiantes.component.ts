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
      curso: 'ANGULAR',
      calificacion: 4.6,
      aprobado: false,
      foto: 'https://rickandmortyapi.com/api/character/avatar/472.jpeg',
    },
    {
      nombre: 'Mr. Poopybutthole',
      grupo: 2,
      curso: 'REACT',
      calificacion: 8.6,
      aprobado: true,
      foto: 'https://rickandmortyapi.com/api/character/avatar/244.jpeg',
    },
    {
      nombre: 'Shleemypants',
      grupo: 2,
      curso: 'NODE ',
      calificacion: 7.7,
      aprobado: true,
      foto: 'https://rickandmortyapi.com/api/character/avatar/313.jpeg',
    },
    {
      nombre: 'Secret Service Snake',
      grupo: 2.8,
      curso: 'ANGULAR',
      calificacion: 8.4,
      aprobado: true,
      foto: 'https://rickandmortyapi.com/api/character/avatar/580.jpeg',
    },
    {
      nombre: 'Michael Jackson',
      grupo: 4.7,
      curso: 'NODE',
      calificacion: 4,
      aprobado: false,
      foto: 'https://rickandmortyapi.com/api/character/avatar/404.jpeg',
    },
    {
      nombre: 'Armothy',
      grupo: 2,
      curso: 'REACT',
      calificacion: 5.4,
      aprobado: false,
      foto: 'https://rickandmortyapi.com/api/character/avatar/25.jpeg',
    },
  ];
}
