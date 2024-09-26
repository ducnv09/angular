import { Component, OnInit } from '@angular/core';
import { FeatureArticle } from 'app/router-feature-module/models/feature-article';
import { Observable } from 'rxjs';
import { FeatureArticleService } from '../feature-article.service';

@Component({
  selector: 'app-feature-article-list',
  templateUrl: './feature-article-list.component.html',
  styleUrl: './feature-article-list.component.css'
})
export class FeatureArticleListComponent implements OnInit {
  featureArticles$: Observable<FeatureArticle[]>;

  constructor(
    private _api: FeatureArticleService
  ) { }

  ngOnInit(): void {
    this.featureArticles$ = this._api.getFeatureArticles();
  }
}
