import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table-material',
  templateUrl: './table-material.component.html',
  styleUrl: './table-material.component.css'
})
// export class TableMaterialComponent implements OnInit {
  export class TableMaterialComponent implements OnInit {
  public getJsonValue: any;
  public displayColumn: string[] = ['id', 'title', 'body'];
  public dataSource: any = [];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      // console.table(data);
      this.getJsonValue = data;
      this.dataSource = data;
    })
  }

  // data: TreeNode[] = [
  //   {
  //     id: 1,
  //     name: 'Node 1',
  //     children: [
  //       { id: 2, name: 'Node 1.1' },
  //       { id: 3, name: 'Node 1.2' }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     name: 'Node 2',
  //     children: [
  //       { id: 5, name: 'Node 2.1' }
  //     ]
  //   }
  // ];

  // constructor() { }

  // ngOnInit(): void { }

  // toggleNode(node: TreeNode): void {
  //   node.expanded = !node.expanded;
  // }
   
}
