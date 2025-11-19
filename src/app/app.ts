import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('zome-landing');

  scrollToForm() {
  const element = document.getElementById('formulario');
    if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

