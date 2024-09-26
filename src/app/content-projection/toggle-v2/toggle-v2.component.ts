import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-v2',
  templateUrl: './toggle-v2.component.html',
  styleUrl: './toggle-v2.component.css'
})
export class ToggleV2Component {
  // @Input() header: string;
  // @Input() question: string;
  // @Input() content: string;
  // @Input() canSkip: boolean;
  // @Output() skip = new EventEmitter();

  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}
