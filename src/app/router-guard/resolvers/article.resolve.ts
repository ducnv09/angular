import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Article } from "../models/article";
import { ArticleService } from "../services/article.service";
import { catchError, delay, EMPTY, filter, Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ArticleResolver implements Resolve<Article> {

    constructor(    
        private readonly articleService: ArticleService,
        private readonly router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Article> {
        const slug = route.params['slug'];
        if (!slug) {
            this.redirectToNoArticle();
            return EMPTY; // Trả về EMPTY observable thay vì undefined
        }

        return this.articleService.getArticle(slug).pipe(
            delay(2000),
            tap(article => {
                if (!article) {
                    this.redirectToNoArticle();
                }
            }),
            filter((article): article is Article => !!article), // Loại bỏ các giá trị null hoặc undefined
            catchError(() => {
                this.redirectToNoArticle();
                return EMPTY; // Trong trường hợp lỗi, điều hướng và trả về EMPTY
            })
        );
    }

    private redirectToNoArticle() {
        this.router.navigate(['/articles/no-article']);
    }

}