import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyHomeComponent } from './lazy-home.component';

describe('LazyHomeComponent', () => {
  let component: LazyHomeComponent;
  let fixture: ComponentFixture<LazyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
