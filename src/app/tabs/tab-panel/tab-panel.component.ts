import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrl: './tab-panel.component.css'
})
export class TabPanelComponent implements OnInit{
  @Input() title: string;

  // The @ViewChild decorator allows you to get a reference to a child component or directive. 
  // It provides a way to access and manipulate elements or directives in the component's template.

  // TemplateRef is an Angular class that represents a reference to a <ng-template>. 
  // It allows you to create a reusable template that can be rendered at different points in your application.

// panelBody: TemplateRef<unknown>:
// This is the property that will hold the reference to the TemplateRef. 
// The type TemplateRef<unknown> specifies that panelBody will be a TemplateRef object. 
// The generic type <unknown> indicates that the template can be of any type and is not strongly typed.
  @ViewChild(TemplateRef, { static: true }) panelBody: TemplateRef<unknown>;

  @ContentChild(TemplateRef, {static: true}) explicitBody: TemplateRef<unknown>;  
 
  constructor(private tabGroup: TabGroupComponent) { }

  ngOnInit() {  
    this.tabGroup.addTab(this);
  }
}
