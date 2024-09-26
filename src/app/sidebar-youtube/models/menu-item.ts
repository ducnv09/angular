import { Type } from "@angular/core";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { PlaylistsComponent } from "../pages/dashboard/playlists/playlists.component";
import { ShortsComponent } from "../pages/dashboard/playlists/shorts/shorts.component";

export type MenuItem = {
    icon: string;
    label: string;
    route?: string;
    // component?: Type<unknown>;
    subItems?: MenuItem[];
}

// export const menuItems: MenuItem[] = [
//     {
//         icon: 'dashboard',
//         label: 'Dashboard',
//         route: 'dashboard',
//         component: DashboardComponent,
//         subItems: [
//             {
//                 icon: 'play_circle',
//                 label: 'Videos',
//                 route: 'videos',
//                 component: PlaylistsComponent,
//             },
//             {
//                 icon: 'playlist_play',
//                 label: 'Playlists',
//                 route: 'playlists',
//                 component: PlaylistsComponent,
//                 subItems: [
//                     {
//                         icon: 'movie',
//                         label: 'Shorts',
//                         route: 'shorts',
//                         component: ShortsComponent,
//                     },
//                     {
//                         icon: 'tv',
//                         label: 'Long Form',
//                         route: 'long-form',
//                     },
//                 ]
//             },
//             {
//                 icon: 'library_add',
//                 label: 'Posts',
//                 route: 'posts',
//                 component: PlaylistsComponent,
//             },
//         ],
//     },
//     {
//         icon: 'video_library',
//         label: 'Content',
//         route: 'content',
//         component: DashboardComponent,
//     },
//     {
//         icon: 'analytics',
//         label: "Analytics",
//         route: "analytics",
//         component: DashboardComponent,
//     },
//     {
//         icon: "comments",
//         label: "Comments",
//         route: "comments",
//         component: DashboardComponent,
//     },
// ]