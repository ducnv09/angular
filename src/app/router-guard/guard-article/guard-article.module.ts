import { NgModule } from "@angular/core";
import { GuardArticleListComponent } from "./guard-article-list/guard-article-list.component";
import { GuardArticleDetailComponent } from "./guard-article-detail/guard-article-detail.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { guardArticlesRoutes } from "./guard-article.routes";

@NgModule({
    declarations: [
        GuardArticleListComponent,
        GuardArticleDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(guardArticlesRoutes)
    ]
})
export class GuardArticleModule {

}