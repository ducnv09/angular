import { Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import { animate, scroll } from 'motion';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: {
    '(mouseenter)': 'navbarHover.set(true)',
    '(mouseleave)': 'navbarHover.set(false)'
  },
})
export class NavbarComponent {

  navbar = viewChild.required<ElementRef>('navbar');
  navbarVisible = signal(true);
  navbarHover = signal(false);

  ngOnInit() {
    scroll((scrollInfo) => {
      const position = scrollInfo.y.current;
      const velocity = scrollInfo.y.velocity;

      // console.log('position', position);
      // console.log('velocity', velocity);


      if (Math.abs(velocity) > 50) {
        if (position < 200 || velocity < 0) {
          this.navbarVisible.set(true);
        } else {
          this.navbarVisible.set(false);
        }
      }
      
    });
  }

  // logVisible = effect(() => console.log(this. navbarVisible()));

  animateNav = effect(() => {
    if (this.navbarVisible() || this.navbarHover()) {
      animate(this.navbar().nativeElement, { y: '0%'}, { duration: 0.2 });
    } else {
      animate(this.navbar().nativeElement, { y: '-70%'} , { duration: 0.2 });
    }
  })
}
