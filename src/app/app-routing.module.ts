import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ng-router/home/home.component';
import { ChildHomeComponent } from './ng-router/home/child-home/child-home.component';
import { ArticleDetailComponent } from './ng-router/article-detail/article-detail.component';
import { LazyHomeComponent } from './router-lazy-loading/lazy-home/lazy-home.component';
import { GuardHomeComponent } from './router-guard/guard-home/guard-home.component';
import { ArticlesGuard } from './router-guard/guard/articles.guard';

const routes: Routes = [
  // {
  //   path: "home/child",
  //   component: ChildHomeComponent,
  // },
  // {
  //   path: "home",
  //   component: HomeComponent,
  //   // children: [
  //   //   {
  //   //     path: 'child',
  //   //     component: ChildHomeComponent
  //   //   }
  //   // ]
  // },
  // {
  //   path: "detail/:bookID",
  //   component: ArticleDetailComponent,
  // },
  // {
  //   path: "",
  //   component: LazyHomeComponent,
  // },
  {
    path: "",
    component: GuardHomeComponent,
  },

//lazy load
  // {
  //   path: "lazyArticles",
  //   loadChildren: () => import('./router-lazy-loading/lazy-article/lazy-article.module').then(m => m.LazyArticleModule)
  // },
  {
    path: "guardArticles",
    loadChildren: () => import('./router-guard/guard-article/guard-article.module').then(m => m.GuardArticleModule),
    data: { //có thêm thông tin của route này
      feature: 'guardArticles',
      permissions: 'articles-read'
    },
    canActivate: [ArticlesGuard]
  },

  // redirect
  // {
  //   path: '',
  //   redirectTo: 'article',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
