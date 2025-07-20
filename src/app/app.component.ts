import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ExperienceComponentComponent } from "./experience-component/experience-component.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, HomepageComponent, ExperienceComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'port';
  
  
}
