import { Component } from '@angular/core';
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
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ];
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
    console.log(event);
  }

  keyDownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    
  }

}
