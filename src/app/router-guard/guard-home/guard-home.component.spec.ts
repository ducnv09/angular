import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardHomeComponent } from './guard-home.component';

describe('GuardHomeComponent', () => {
  let component: GuardHomeComponent;
  let fixture: ComponentFixture<GuardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
