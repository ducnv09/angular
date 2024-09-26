import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.css'
})
export class ClassBindingComponent {
  isDanger = false;
  isWarning = false;

  classes = "box red-border yellow-background";
}
