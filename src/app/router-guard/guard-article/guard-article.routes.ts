import { Routes } from "@angular/router";
import { GuardArticleListComponent } from "./guard-article-list/guard-article-list.component";
import { GuardArticleDetailComponent } from "./guard-article-detail/guard-article-detail.component";
import { ArticlesGuard } from "../guard/articles.guard";
import { GuardArticleDetailEditComponent } from "./guard-article-detail-edit/guard-article-detail-edit.component";
import { GuardNoArticleComponent } from "./guard-no-article/guard-no-article.component";
import { ArticleResolver } from "../resolvers/article.resolve";

export const guardArticlesRoutes: Routes = [
    //lazy load
    {
        path: '',  
        component: GuardArticleListComponent // lazyArticles/
    },
    {
        path: 'no-article',  
        component: GuardNoArticleComponent
    },
    {
        path: ':slug',  
        // component: GuardArticleDetailComponent, // lazyArticles/:slug
        canActivateChild: [ArticlesGuard],
        children: [
            {
                path: '', 
                component: GuardArticleDetailComponent,
                resolve: {
                    article: ArticleResolver //key
                }
            },
            {
                path: 'edit', 
                component: GuardArticleDetailEditComponent,
                canDeactivate: [ArticlesGuard]
            },
        ]
    }
];