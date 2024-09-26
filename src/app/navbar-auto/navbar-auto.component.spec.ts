import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAutoComponent } from './navbar-auto.component';

describe('NavbarAutoComponent', () => {
  let component: NavbarAutoComponent;
  let fixture: ComponentFixture<NavbarAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarAutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
