import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-v1',
  templateUrl: './toggle-v1.component.html',
  styleUrl: './toggle-v1.component.css'
})
export class ToggleV1Component {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}
