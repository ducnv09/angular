import { Component } from '@angular/core';

let _count = 1;

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.css'
})
export class ContentChildComponent {
  count = _count++;
}
