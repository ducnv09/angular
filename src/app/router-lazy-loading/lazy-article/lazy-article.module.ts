
import { LazyArticleListComponent } from "./lazy-article-list/lazy-article-list.component";
import { LazyArticleDetailComponent } from "./lazy-article-detail/lazy-article-detail.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { lazyArticlesRoutes } from "./lazy-article.routes";

@NgModule({
    declarations: [
        LazyArticleListComponent,
        LazyArticleDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(lazyArticlesRoutes)
    ]
})
export class LazyArticleModule {

}