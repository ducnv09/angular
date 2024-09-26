import { Component, computed, effect, input, signal } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: '0px'}),
        animate('500ms ease-in-out', style({ opacity: 1, height: '*'})),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, height: '0px'})),
      ])
    ]),
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

  item = input.required<MenuItem>();

  collapsed = input(false);

  routeHistory = input('');

  //hiệu ứng lồng
  nestedMenuOpen = signal(false);

  toggleNested() {
    if (!this.item().subItems) {
      return;
    }

    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }

  // cấp độ của item
  level = computed(() => this.routeHistory().split('/').length - 1);

  // thụt đầu dòng item theo level
  indentation = computed(() => this.collapsed() ? '16px'  : `${(16 + (this.level() * 16))}px`);

  // in ra đường link
  // logRoutes = effect(() => console.log(this.routeHistory(), this.level()));

}
