import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyArticleDetailComponent } from './lazy-article-detail.component';

describe('LazyArticleDetailComponent', () => {
  let component: LazyArticleDetailComponent;
  let fixture: ComponentFixture<LazyArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyArticleDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
