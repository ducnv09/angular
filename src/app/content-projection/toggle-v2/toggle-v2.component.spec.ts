import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleV2Component } from './toggle-v2.component';

describe('ToggleV2Component', () => {
  let component: ToggleV2Component;
  let fixture: ComponentFixture<ToggleV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
