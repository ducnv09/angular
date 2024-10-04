import { Routes } from "@angular/router";
import { LazyArticleListComponent } from "./lazy-article-list/lazy-article-list.component";
import { LazyArticleDetailComponent } from "./lazy-article-detail/lazy-article-detail.component";

export const lazyArticlesRoutes: Routes = [
    // {
    //     path: 'lazyArticles',
    //     children: [
    //         {
    //             path: '',  
    //             component: LazyArticleListComponent // lazyArticles/
    //         },
    //         {
    //             path: ':slug',  
    //             component: LazyArticleDetailComponent // lazyArticles/:slug
    //         }
    //     ]
    // }

    //lazy load
    {
        path: '',  
        component: LazyArticleListComponent // lazyArticles/
    },
    {
        path: ':slug',  
        component: LazyArticleDetailComponent // lazyArticles/:slug
    }
];