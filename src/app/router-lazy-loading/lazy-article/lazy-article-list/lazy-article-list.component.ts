import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'app/router-lazy-loading/models/article';
import { ArticleService } from 'app/router-lazy-loading/services/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lazy-article-list',
  templateUrl: './lazy-article-list.component.html',
  styleUrl: './lazy-article-list.component.css'
})
export class LazyArticleListComponent {

  articles$: Observable<Article[]>;

  constructor(
    private readonly articleService: ArticleService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.article$;
  }

  onReadMoreClick(slug: string) {
    this.router.navigate(['/lazyArticles', slug]);
  }
}
