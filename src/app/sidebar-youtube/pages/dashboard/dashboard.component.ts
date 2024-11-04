import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';

// material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { RouterModule } from '@angular/router';
import { WidgetComponent } from "../../components/widget/widget.component";
import { Widget } from '../../models/dashboard';
import { SubscribersComponent } from './widgets/subscribers/subscribers.component';
import { DashboardService } from '../../services/dashboard.service';

// cdk
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop'

// animate grid
import { wrapGrid } from 'animate-css-grid';
import { WidgetsPanelComponent } from "./widgets-panel/widgets-panel.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [
    DashboardService
  ],
  imports: [
    RouterModule,
    WidgetComponent,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule,
    CdkDropList,
    CdkDropListGroup,
    WidgetsPanelComponent,
    CdkDrag
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  // data: Widget = {
  //   id: 1,
  //   label: 'Subscribers',
  //   content: SubscribersComponent
  // }

  store = inject(DashboardService);

  dashboard = viewChild.required<ElementRef>('dashboard');

  ngOnInit(): void {
      wrapGrid(
        this.dashboard().nativeElement, 
        {
          duration: 300
        }
      );
  }

  drop(event: CdkDragDrop<number, any>) {
    const { previousContainer, container, item: { data } } = event;

    if (data) {
      this.store.insertWidgetAtPosition(data, container.data);
      return;
    }

    this.store.updateWidgetPosition(previousContainer.data, container.data);
  }

  widgetsOpen = signal(false);
  
  widgetPutBack(event: CdkDragDrop<number, any>) {
    const { previousContainer } = event;  
    this.store.removeWidget(previousContainer.data);
  }
}
