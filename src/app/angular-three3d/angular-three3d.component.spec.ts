import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularThree3dComponent } from './angular-three3d.component';

describe('AngularThree3dComponent', () => {
  let component: AngularThree3dComponent;
  let fixture: ComponentFixture<AngularThree3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularThree3dComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularThree3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
