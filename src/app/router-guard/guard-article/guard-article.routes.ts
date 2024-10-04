import { Routes } from "@angular/router";
import { GuardArticleListComponent } from "./guard-article-list/guard-article-list.component";
import { GuardArticleDetailComponent } from "./guard-article-detail/guard-article-detail.component";
import { ArticleDetailComponent } from "app/ng-router/article-detail/article-detail.component";
import { ArticlesGuard } from "../guard/articles.guard";

export const guardArticlesRoutes: Routes = [
    //lazy load
    {
        path: '',  
        component: GuardArticleListComponent // lazyArticles/
    },
    {
        path: ':slug',  
        // component: GuardArticleDetailComponent, // lazyArticles/:slug
        canActivateChild: [ArticlesGuard],
        children: [
            {
                path: '', 
                component: ArticleDetailComponent
            }
        ]
    }
];