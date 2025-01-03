import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowcaseComponent } from './components/showcase/showcase.component';

@Component({
  selector: 'app-root',
  imports: [ShowcaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tab-bar';
}
