import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks = signal< Task[] >([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: true
    },
  ]);

  addNewTask(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;

    this.formatTask(newTask);
    input.value = '';
  }

  formatTask(title: string){
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    }

    //Agregar un nuevo valor a mi Signal
    this.tasks.update((tasks) => [...tasks, newTask] );

  }

  deleteTasks(index: number){    
    
    this.tasks.update((tasks) => {
      const updatedTasks = tasks.filter((task, position) => position !== index);
      return updatedTasks;
    });
  }
}
