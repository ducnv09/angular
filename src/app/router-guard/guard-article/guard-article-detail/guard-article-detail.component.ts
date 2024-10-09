import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'app/router-guard/models/article';
import { ArticleService } from 'app/router-guard/services/article.service';
import { delay, filter, Observable, pluck, switchMap } from 'rxjs';

@Component({
  selector: 'app-guard-article-detail',
  templateUrl: './guard-article-detail.component.html',
  styleUrl: './guard-article-detail.component.css'
})
export class GuardArticleDetailComponent {

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

    // this.article$ = this.router.params.pipe(
    //   pluck('slug'),
    //   switchMap(slug => this.articleService.getArticle(slug)),
    //   filter(article => !!article),
    //   delay(2000),
    // ) 

    
    this.article$ = this.router.data.pipe(pluck('article'));
  }
}
