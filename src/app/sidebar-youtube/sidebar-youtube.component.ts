import { Component, computed, signal } from '@angular/core';

// material
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { CustomSidenavComponent } from "./components/custom-sidenav/custom-sidenav.component";
import { RouterModule } from '@angular/router';
import { AuthService } from '../login2/service/auth-service.service';
// import { AuthService } from '../login/services/auth-service.service';

@Component({
  selector: 'app-sidebar-youtube',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    CustomSidenavComponent,
    RouterModule,
    MatButtonModule
  ],
  templateUrl: './sidebar-youtube.component.html',
  styleUrl: './sidebar-youtube.component.scss'
})
export class SidebarYoutubeComponent {
  collapsed = signal(false);

  sidenavWidth = computed(() => this.collapsed() ? '67px' : '250px');

  constructor(
    private authService: AuthService
  ) { }

  handleLogout() {
    this.authService.logout();
  }
}
