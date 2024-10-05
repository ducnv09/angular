import { Component } from '@angular/core';
import { AuthComponent } from "./pages/auth/auth.component";
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SidebarYoutubeComponent } from "../sidebar-youtube/sidebar-youtube.component"; // Import this
// import { AuthService } from './services/auth-service.service';
import { AuthService } from '../login2/service/auth-service.service';
import { Login2Component } from "../login2/login2.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AuthComponent,
    RouterOutlet,
    HttpClientModule,
    SidebarYoutubeComponent,
    Login2Component
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  user: any

  constructor(
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.authService.getUserProfile().subscribe();
    this.authService.getUserInfo().subscribe();
    this.authService.authSubject.subscribe(
      (auth) => {
        this.user = auth.user;
      }
    );
  }

  handleLogout() {
    this.authService.logout();
  }
}
