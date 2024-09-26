import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Observable, pluck, switchMap } from 'rxjs';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent implements OnInit {

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
      pluck('bookID'),
      switchMap(slug => this.articleService.getArticle(slug)),
      filter(article => !!article)
    ) 
  }
}
