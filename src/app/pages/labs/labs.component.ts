import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {

  welcome = 'Hola';
  tasks = signal([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]);
  name = 'Luis';
  age = 29;
  disabled=true
  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9F3mcx5zc3M0Wv5k0tA9f7I_-90MDyFTWpg&s';

  person = {
    name: 'Luis',
    age: 29,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9F3mcx5zc3M0Wv5k0tA9f7I_-90MDyFTWpg&s'
  };

  clickHandler(){
    alert('Hola');
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;

    this.name2.set(newValue);
  }

  keyDownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    
  }
  // Creando un Signal en Angular
  name2 = signal('David');
}
