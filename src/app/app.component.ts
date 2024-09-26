import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarYoutubeComponent } from "./sidebar-youtube/sidebar-youtube.component";
import { LoginComponent } from "./login/login.component";
import { TableTreeComponent } from "./table-tree/table-tree.component";
import { NavbarAutoComponent } from "./navbar-auto/navbar-auto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarYoutubeComponent,
    LoginComponent,
    TableTreeComponent,
    NavbarAutoComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'giao_dien2';
}
