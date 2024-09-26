import { Injectable } from "@angular/core";
import { FeatureArticle } from "./models/feature-article";
import { delay, Observable, of } from "rxjs";

const FeatureArticles: FeatureArticle[] = [
    {
        id: '1',
        slug: 'bai-viet-1',
        title: 'Bai viet 1',
        content: 'Day la noi dung bai viet 1',
        updateAt: '2020-07-06T13:26:31.785Z',
    },
    {
        id: '2',
        slug: 'bai-viet-2',
        title: 'Bai viet 2',
        content: 'Day la noi dung bai viet 2 nhe ',
        updateAt: '2020-07-15:00:00.000Z',
    },
];
@Injectable({
    providedIn: 'root',
})
export class FeatureArticleService {
    constructor() {}

    getFeatureArticles(): Observable<FeatureArticle[]> {
        return of(FeatureArticles).pipe(delay(500));
    }

    getFeatureArticleBySlug(slug: string | null): Observable<FeatureArticle | null | undefined> {
        let featureArticle = FeatureArticles.find(x => x.slug === slug);
        return of(featureArticle).pipe(delay(500));
    }
}