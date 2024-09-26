import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar-youtube',
  templateUrl: './sidebar-youtube.component.html',
  styleUrl: './sidebar-youtube.component.scss'
})
export class SidebarYoutubeComponent {
  collapsed = signal(false);

  sidenavWidth = computed(() => this.collapsed() ? '67px' : '250px');
}
