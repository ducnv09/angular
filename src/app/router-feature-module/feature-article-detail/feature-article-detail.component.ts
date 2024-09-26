import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeatureArticle } from 'app/router-feature-module/models/feature-article';
import { map, Observable, switchMap } from 'rxjs';
import { FeatureArticleService } from '../feature-article.service';

@Component({
  selector: 'app-feature-article-detail',
  templateUrl: './feature-article-detail.component.html',
  styleUrl: './feature-article-detail.component.css'
})
export class FeatureArticleDetailComponent implements OnInit {
  featureArticle$: Observable<FeatureArticle | null | undefined>;

  constructor(
    private _route: ActivatedRoute,
    private _api: FeatureArticleService
  ) { }

  ngOnInit(): void {
    // let slug = this._route.snapshot.paramMap.get('slug');
    // this.featureArticle$ = this._api.getFeatureArticleBySlug(slug);
    
    this.featureArticle$ = this._route.paramMap.pipe(
      map(params => params.get('slug')),
      switchMap(slug => this._api.getFeatureArticleBySlug(slug))
    )
  }
}
