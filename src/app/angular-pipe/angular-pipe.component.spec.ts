import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPipeComponent } from './angular-pipe.component';

describe('AngularPipeComponent', () => {
  let component: AngularPipeComponent;
  let fixture: ComponentFixture<AngularPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
