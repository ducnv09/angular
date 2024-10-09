import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardNoArticleComponent } from './guard-no-article.component';

describe('GuardNoArticleComponent', () => {
  let component: GuardNoArticleComponent;
  let fixture: ComponentFixture<GuardNoArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardNoArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardNoArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
