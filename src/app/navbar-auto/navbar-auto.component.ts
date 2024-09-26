import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-navbar-auto',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './navbar-auto.component.html',
  styleUrl: './navbar-auto.component.scss'
})
export class NavbarAutoComponent {

}
