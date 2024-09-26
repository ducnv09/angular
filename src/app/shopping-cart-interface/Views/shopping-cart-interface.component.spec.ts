import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartInterfaceComponent } from './shopping-cart-interface.component';

describe('ShoppingCartInterfaceComponent', () => {
  let component: ShoppingCartInterfaceComponent;
  let fixture: ComponentFixture<ShoppingCartInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartInterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
