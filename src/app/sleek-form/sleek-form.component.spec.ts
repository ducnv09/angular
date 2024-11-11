import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleekFormComponent } from './sleek-form.component';

describe('SleekFormComponent', () => {
  let component: SleekFormComponent;
  let fixture: ComponentFixture<SleekFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SleekFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleekFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
