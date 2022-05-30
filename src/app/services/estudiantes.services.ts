import { Estudiantes } from 'src/app/interfaces/estudiantes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  ListaEstudiantes: Estudiantes[] = [
    {nombre: "Lucas", apellido:"Beltrán", curso: 'React', nota: 10 , profesor: 'Gomez'},
    {nombre: "Matias",  apellido:"Losada", curso: 'Angular', nota: 9 , profesor: 'Gomez'},
    {nombre: "Pedro", apellido:"Sánchez", curso: 'Vue', nota: 8 , profesor: 'Gomez'},
    {nombre: "Maria", apellido:"Cruz", curso: 'React', nota: 7 , profesor: 'Gomez'},
    {nombre: "Luicina", apellido:"Ortiz", curso: 'Angular', nota: 6 , profesor: 'Gomez'},
    {nombre: "Luis", apellido:"Fernandez", curso: 'Vue', nota: 5 , profesor: 'Gomez'},
    {nombre: "Karen",  apellido:"Ruiz", curso: 'React', nota: 4 , profesor: 'Gomez'},
    {nombre: "Juana", apellido:"Sanzhez", curso: 'Angular', nota: 3 , profesor: 'Gomez'},
    {nombre: "Marcos", apellido:"Fernandez", curso: 'Vue', nota: 2 , profesor: 'Gomez'},
    {nombre: "Sara",  apellido:"Ruiz", curso: 'React', nota: 1 , profesor: 'Gomez'},
    {nombre: "Juana", apellido:"Ortiz", curso: 'Angular', nota: 0 , profesor: 'Gomez'},
    {nombre: "Pablo", apellido:"Fernandez", curso: 'Vue', nota: 10 , profesor: 'Gomez'},
    
  ];
  constructor() { }

  getEstudiantes(){
    return this.ListaEstudiantes.slice();
  }

  eliminarEstudiante(index: number){
    this.ListaEstudiantes.splice(index, 1);
  }

  agregarEstudiante(estudiante: Estudiantes){
    this.ListaEstudiantes.unshift(estudiante);
    
  }
}