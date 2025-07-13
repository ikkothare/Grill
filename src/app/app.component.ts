import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GrillMe';
}
