import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarYoutubeComponent } from './sidebar-youtube.component';

describe('SidebarYoutubeComponent', () => {
  let component: SidebarYoutubeComponent;
  let fixture: ComponentFixture<SidebarYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarYoutubeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
