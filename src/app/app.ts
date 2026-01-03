import { Component, signal } from '@angular/core';
import {SellForm} from './forms/sell-form/sell-form';
import {BuyForm} from './forms/buy-form/buy-form';

type FormMode = 'sell' | 'buy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SellForm, BuyForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('zome-gold');

  mode = signal<FormMode>('sell');

  setMode(mode: FormMode) {
    this.mode.set(mode);
    setTimeout(() => this.scrollToForm(), 0);
  }

  scrollToForm() {
    const el = document.getElementById('form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
