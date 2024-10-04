import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'app/router-lazy-loading/models/article';
import { ArticleService } from 'app/router-lazy-loading/services/article.service';
import { filter, Observable, pluck, switchMap } from 'rxjs';

@Component({
  selector: 'app-lazy-article-detail',
  templateUrl: './lazy-article-detail.component.html',
  styleUrl: './lazy-article-detail.component.css'
})
export class LazyArticleDetailComponent {

  article$: Observable<Article | null | undefined>;

  constructor(
    private readonly router: ActivatedRoute,
    private readonly articleService: ArticleService 
  ) { }

  ngOnInit(): void {
    // this.router.params.subscribe(console.log);   
    // this.router.paramMap.subscribe(console.log); 
    
    // console.log(this.router.snapshot.params);
    // console.log(this.router.snapshot.paramMap);

    this.article$ = this.router.params.pipe(
      pluck('slug'),
      switchMap(slug => this.articleService.getArticle(slug)),
      filter(article => !!article)
    ) 
  }
}
