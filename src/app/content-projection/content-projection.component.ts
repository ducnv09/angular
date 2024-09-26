import { Component } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.css'
})
export class ContentProjectionComponent {
  questions = {
    question1: true,
    question2: false
  }
}
