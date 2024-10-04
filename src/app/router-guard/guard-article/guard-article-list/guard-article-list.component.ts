import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'app/router-guard/models/article';
import { ArticleService } from 'app/router-guard/services/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-guard-article-list',
  templateUrl: './guard-article-list.component.html',
  styleUrl: './guard-article-list.component.css'
})
export class GuardArticleListComponent {

  articles$: Observable<Article[]>;

  constructor(
    private readonly articleService: ArticleService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.article$;
  }

  onReadMoreClick(slug: string) {
    this.router.navigate(['/guardArticles', slug]);
  }
}
