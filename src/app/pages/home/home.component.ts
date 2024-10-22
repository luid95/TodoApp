import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks = signal([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear  servicio',
  ]);

  AddNewTask(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;

    //Agregar un nuevo valor a mi Signal
    this.tasks.update((tasks) => [...tasks, newTask] );
    input.value = '';
  }

  deleteTasks(index: number){    
    
    this.tasks.update((tasks) => {
      const updatedTasks = tasks.filter((task, position) => position !== index);
      return updatedTasks;
    });
  }
}
