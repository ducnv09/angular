import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { PageSettingsModel, SortSettingsModel } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-table-tree',
  templateUrl: './table-tree.component.html',
  styleUrl: './table-tree.component.css'
})
export class TableTreeComponent implements OnInit {
  public data: Object[];
  public pageSettings: PageSettingsModel;
  public sortSettings: SortSettingsModel;

  ngOnInit(): void {
    this.data = sampleData;
    this.pageSettings = {
      pageSize: 6
    };
    this.sortSettings = {
      columns: [
        { field: "taskName", direction: "Ascending"},
        { field: "taskID", direction: "Descending"},
      ]
    };
  }
}
