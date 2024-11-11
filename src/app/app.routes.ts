import { Route, Routes } from '@angular/router';
import { DashboardComponent } from './sidebar-youtube/pages/dashboard/dashboard.component';
import { PlaylistsComponent } from './sidebar-youtube/pages/dashboard/playlists/playlists.component';
import { ShortsComponent } from './sidebar-youtube/pages/dashboard/playlists/shorts/shorts.component';
import { MenuItem } from './sidebar-youtube/models/menu-item';
import { TableTreeComponent } from './table-tree/table-tree.component';
import { ConverterComponent } from './converter/converter.component';

// const itemToSource = (i: MenuItem): Route => {
//   const route: Route = {
//     path: i.route,
//     component: i.component
//   };

//   if (i.subItems) {
//     route.children = i.subItems.map((s) => itemToSource(s));
//   }

//   return route;
// }

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  // ...menuItems.map((i) => itemToSource(i)),
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'playlists',
        component: PlaylistsComponent,
        children: [
          {
            path: 'shorts',
            component: ShortsComponent,
          },
          {
            path: 'long-form',
            component: ShortsComponent,
          },
        ]
      },
      {
        path: 'videos',
        component: PlaylistsComponent
      },
      {
        path: 'posts',
        component: PlaylistsComponent
      },
    ]
  },
  {
    path: 'content',
    component: TableTreeComponent,
  },
  {
    path: 'analytics',
    component: ConverterComponent,
  },
  {
    path: 'comments',
    component: DashboardComponent,
  },
];
