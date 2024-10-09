import { Injectable } from "@angular/core";
import { Article } from "../models/article";
import { map, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor() {}

    get article$() {
        return of<Article[]>([
            {
              title:  'Title 1',
              body: 'Lorem ipsum dolor',
              slug: 'title-1'
            },
            {
              title:  'Title 2',
              body: 'Lorem ipsum dolor',
              slug: 'title-2'
            }
          ])
    }

    getArticle(slug: string): Observable<Article | null | undefined> {
        return this.article$.pipe(map(articles => articles.find(ar => ar.slug === slug)));
    }
}