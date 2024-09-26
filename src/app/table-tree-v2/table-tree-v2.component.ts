import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatNode, TreeNode, TREE_DATA } from './table-tree-v2-data';

@Component({
  selector: 'app-table-tree-v2',
  templateUrl: './table-tree-v2.component.html',
  styleUrl: './table-tree-v2.component.css'
})
export class TableTreeV2Component implements OnInit{
  // Table columns to be displayed
  displayedColumns: string[] = ['expand', 'id', 'name', 'details'];

  // Transformer to flatten tree nodes
  private _transformer = (node: TreeNode, level: number): FlatNode => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      details: node.details || '',
      id: node.id
    };
  };

  // Tree control to manage expansion
  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  // Flattener to handle nested data
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  // Data source for mat-table
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
  }

  ngOnInit(): void {
      this.dataSource.data = TREE_DATA;
  }

  toggleNode(node: FlatNode) {
    // Toggle the current node
    this.treeControl.toggle(node);

    // If the node is expanded, collapse all children
    if (this.treeControl.isExpanded(node)) {
      this._collapseChildren(node);
    } else {
      this._expandChildren(node);
    }
  }

  private _collapseChildren(node: FlatNode) {
    // Recursively collapse all children of the current node
    this.treeControl.dataNodes
      .filter(child => this._isDirectChildOf(child, node) && this.treeControl.isExpanded(child))
      .forEach(child => this.treeControl.collapse(child));
  }

  private _expandChildren(node: FlatNode) {
    this.treeControl.dataNodes
      .filter(child => this._isDirectChildOf(child, node) && !this.treeControl.isExpanded(child))
      .forEach(child => this.treeControl.expand(child));
  }

  private _isDirectChildOf(child: FlatNode, parent: FlatNode): boolean {
    // A node is a direct child if its level is exactly 1 more than its parent
    return child.level === parent.level + 1 && this._isDescendantOf(child, parent);
  }

  private _isDescendantOf(child: FlatNode, parent: FlatNode): boolean {
    // A node is a descendant if it appears after the parent node and before the next sibling at the same level or higher
    const parentIndex = this.treeControl.dataNodes.indexOf(parent);
    const childrenIndex = this.treeControl.dataNodes.indexOf(child);

    if (childrenIndex < parentIndex)
      return false;

    // Ensure the child is nested within the parent's level
    for (let i = parentIndex + 1; i < childrenIndex; i++) {
      if (this.treeControl.dataNodes[i].level <= parent.level) {
        return false;
      }
    }

    return true;
  }
  // private _isChildOf(child: FlatNode, parent: FlatNode): boolean {
  //   return this.treeControl.dataNodes.some(node => node.id === parent.id && node.level === child.level - 1);
  // }


}