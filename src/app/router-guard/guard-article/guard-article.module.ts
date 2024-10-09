import { NgModule } from "@angular/core";
import { GuardArticleListComponent } from "./guard-article-list/guard-article-list.component";
import { GuardArticleDetailComponent } from "./guard-article-detail/guard-article-detail.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { guardArticlesRoutes } from "./guard-article.routes";
import { GuardArticleDetailEditComponent } from './guard-article-detail-edit/guard-article-detail-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GuardNoArticleComponent } from './guard-no-article/guard-no-article.component';

@NgModule({
    declarations: [
        GuardArticleListComponent,
        GuardArticleDetailComponent,
        GuardArticleDetailEditComponent,
        GuardNoArticleComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(guardArticlesRoutes)
    ]
})
export class GuardArticleModule {

}