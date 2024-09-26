import { RouterModule, Routes } from "@angular/router";
import { FeatureArticleListComponent } from "./feature-article-list/feature-article-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureArticleDetailComponent } from "./feature-article-detail/feature-article-detail.component";

const routes: Routes = [
    {
        path: 'article',
        component: FeatureArticleListComponent
    },
    {
        path: 'article/:slug',
        component: FeatureArticleDetailComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        FeatureArticleListComponent,
        FeatureArticleDetailComponent
    ]
})
export class FeatureArticleModule { }