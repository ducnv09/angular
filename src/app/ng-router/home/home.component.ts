import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(
    private readonly articleService: ArticleService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    // this.articles$ = of<Article[]>([
    //   {
    //     title:  'Title 1',
    //     body: 'Lorem ipsum dolor',
    //     slug: 'title 1'
    //   },
    //   {
    //     title:  'Title 2',
    //     body: 'Lorem ipsum dolor',
    //     slug: 'title 2'
    //   }
    // ]);
    this.articles$ = this.articleService.article$;
  }

  onReadMoreClick(slug: string) {
    this.router.navigate(['/detail', slug]);
  }
}
