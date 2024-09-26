import { Component, ElementRef, Query, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ToggleV1Component } from './toggle-v1/toggle-v1.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  isChecked = true;
  name = "duc dz";
  // @ViewChild('toggleComp') toggleComp: ToggleV1Component;
  // @ViewChild(ToggleV1Component, {static: true, read: ViewContainerRef}) toggleComp: ToggleV1Component;

  // @ViewChild(ToggleV1Component, {static: true, read: ElementRef}) toggleComp: ToggleV1Component;
  // @ViewChild('toggleButton', {static: true}) toggleButton: ElementRef<HTMLButtonElement>;

  showLast = true;


  @ViewChildren(ToggleV1Component) toggleComps: QueryList<ToggleV1Component>;
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef<HTMLInputElement>;
  ngOnInit() {
    // setTimeout(() => {
    //   this.nameInput.nativeElement.focus();
    // }, 3000);
    // console.log('onInit', this.toggleComp, this.toggleButton);
    // console.log('onInit', this.toggleComp);

    console.log(this.nameInput);

  }

  ngAfterViewInit() {
    // console.log(this.toggleComp);

    this.toggleComps.changes.subscribe(console.log);
  }
}
