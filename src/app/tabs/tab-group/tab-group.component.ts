import { Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.css'
})
export class TabGroupComponent {
  tabPanelList: TabPanelComponent[] = [];
  @Input() activeIndex = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  @ContentChildren(TabPanelComponent) tabPanels: QueryList<TabPanelComponent>;

  ngAfterContentInit() {
    console.log(this.tabPanels);
    this.tabPanels.changes.subscribe(console.log);
  }

  addTab(tab: TabPanelComponent) {
    this.tabPanelList = [...this.tabPanelList, tab];
  };

  removeTab(tab: TabPanelComponent) {
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((tp, index) => {
      if (tp === tab) {
        found = index;
        return false;
      }
      return true;
    });

    //  [0, 1, 2, 3]
    // [0, 1, 2]
    if (found === this.activeIndex) {
      // found = 3
      this.activeIndexChange.emit(
        found === this.tabPanelList.length ? found - 1 : found
      );
    }
  }
}
