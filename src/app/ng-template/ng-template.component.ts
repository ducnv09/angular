import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {
  counter = 1;
  navs = ['Active', 'Link 1', 'Link 2'];
}
