import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNestComponent } from './table-nest.component';

describe('TableNestComponent', () => {
  let component: TableNestComponent;
  let fixture: ComponentFixture<TableNestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableNestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
