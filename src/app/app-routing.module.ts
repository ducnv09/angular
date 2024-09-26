import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanComponent } from './kanban/kanban.component';
import { TableTreeV2Component } from './table-tree-v2/table-tree-v2.component';
import { DashboardComponent } from './sidebar-youtube/pages/dashboard/dashboard.component';
import { ContentComponent } from './sidebar-youtube/pages/content/content.component';
import { AnalyticsComponent } from './sidebar-youtube/pages/analytics/analytics.component';
import { CommentsComponent } from './sidebar-youtube/pages/comments/comments.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'dashboard'
  // },
  // {
  //   path: 'dashboard',
  //   component: KanbanComponent,
  // },
  // {
  //   path: 'content',
  //   component: TableTreeV2Component,
  // },
  // {
  //   path: 'analytics',
  //   component: AnalyticsComponent,
  // },
  // {
  //   path: 'comments',
  //   component: CommentsComponent,
  // },
  // {
  //   path: "kanban",
  //   component: KanbanComponent,
  // },
  // {
  //   path: "table-tree",
  //   component: TableTreeV2Component,
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
