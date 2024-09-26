import { Component } from '@angular/core';
import { JobListService } from './job-list.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmDeleteComponent } from './dialog-confirm-delete/dialog-confirm-delete.component';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.css'
})
export class KanbanComponent {

  constructor(
    private jobListService: JobListService,
    public dialog: MatDialog
  ) {}

  deleteAll(): void {
    const dialogRef = this.dialog.open(DialogConfirmDeleteComponent, {
      width: "20rem",
      data: { name: "all" },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jobListService.clearLocalStorage();

        // Reload the page after clearing local storage
        window.location.reload();
      }
    });
  }
}
