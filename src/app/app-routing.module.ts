import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ng-router/home/home.component';
import { ChildHomeComponent } from './ng-router/home/child-home/child-home.component';
import { ArticleDetailComponent } from './ng-router/article-detail/article-detail.component';

const routes: Routes = [
  // {
  //   path: "home/child",
  //   component: ChildHomeComponent,
  // },
  {
    path: "home",
    component: HomeComponent,
    // children: [
    //   {
    //     path: 'child',
    //     component: ChildHomeComponent
    //   }
    // ]
  },
  {
    path: "detail/:bookID",
    component: ArticleDetailComponent,
  },
  // redirect
  {
    path: '',
    redirectTo: 'article',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
