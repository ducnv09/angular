import { Component, computed, Input, OnInit, signal } from '@angular/core';

// material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { MenuItem } from '../../models/menu-item';


// export type MenuItem = {
//   icon: string;
//   label: string;
//   route?: string;
//   subItems?: MenuItem[];
// }

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    CommonModule,
    MenuItemComponent
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent{
  // [x: string]: any;

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
      subItems: [
        {
          icon: 'play_circle',
          label: 'Videos',
          route: 'videos',
        },
        {
          icon: 'playlist_play',
          label: 'Playlists',
          route: 'playlists',
          subItems: [
            {
              icon: 'movie',
              label: 'Shorts',
              route: 'shorts',
            },
            {
              icon: 'tv',
              label: 'Long Form',
              route: 'long-form',
            },
          ]
        },
        {
          icon: 'library_add',
          label: 'Posts',
          route: 'posts',
        },
      ],
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
    },
    {
      icon: 'analytics',
      label: "Analytics",
      route: "analytics",
    },
    {
      icon: "comments",
      label: "Comments",
      route: "comments",
    },
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
