import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  newTaskCtrl = new FormControl('',{
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });

  addNewTask(){
    if(this.newTaskCtrl.valid){
      const value: string  = this.newTaskCtrl.value.trim();

      if(value !== ''){
        this.formatTask(value);
        this.newTaskCtrl.setValue('');
      }
      
    }
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

    // Método para cambiar el estado de completado de la tarea
    toggleTaskCompleted(index: number): void {

      this.tasks.update( (tasks) => {

        return tasks.map((task, position) => {
          
          if (position === index) {
            
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task;
        });
      });

    }
}
