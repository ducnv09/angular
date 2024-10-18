import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CheckDeactivate } from 'app/router-guard/check-deactivate';
import { Article } from 'app/router-guard/models/article';
import { ArticleService } from 'app/router-guard/services/article.service';
import { filter, Observable, of, pluck, Subject, switchMap, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-guard-article-detail-edit',
  templateUrl: './guard-article-detail-edit.component.html',
  styleUrl: './guard-article-detail-edit.component.css'
})
export class GuardArticleDetailEditComponent implements CheckDeactivate {

  form$: Observable<FormGroup>;

  private initialFormValue: unknown;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form$ = this.route.params.pipe(
      pluck('slug'),
      switchMap(slug => this.articleService.getArticle(slug)), // Loại bỏ các giá trị null hoặc undefined, đảm bảo rằng chỉ bài viết hợp lệ mới được xử lý.
      filter((article): article is Article => !!article),
      switchMap(article => of(this.initForm(article)))
    );
  }

  private initForm(article: Article): FormGroup {
    const form = this.fb.group({
      title: [article.title],
      body: [article.body]
    });

    this.initialFormValue = form.getRawValue();
    return form;
  }

  // checkDeactivate() {
  //   return true;
  // }

  checkDeactivate(): Observable<boolean> {
      let formValue = {};
    this.form$.pipe(take(1)).subscribe(form => {
      formValue = form.getRawValue();
    });
    const isEdited = JSON.stringify(this.initialFormValue) !== JSON.stringify(formValue);
    return of(!isEdited || confirm('Do you want to cancel change?'));
  }
}
