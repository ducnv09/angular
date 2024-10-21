import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DashboardService } from '../../../services/dashboard.service';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-widgets-panel',
  standalone: true,
  imports: [
    MatIcon,
    CdkDrag
  ],
  templateUrl: './widgets-panel.component.html',
  styleUrl: './widgets-panel.component.scss'
})
export class WidgetsPanelComponent {

  store = inject(DashboardService)
}
