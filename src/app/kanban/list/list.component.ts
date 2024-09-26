import { Component, ElementRef, OnInit, Query, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { JobList } from '../job-list.model';
import { JobListService } from '../job-list.service';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, CdkDragMove, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DialogConfirmDeleteComponent } from '../dialog-confirm-delete/dialog-confirm-delete.component';
import { DialogConfirmEditComponent } from '../dialog-confirm-edit/dialog-confirm-edit.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  @ViewChild('editListName') editListNameInput!: ElementRef;
  @ViewChildren('jobList') jobLists!: QueryList<ElementRef>;

  jobListsData: JobList[];

  //variance open edit list name
  editListName: any = null;

  showAddForm: boolean[] = [];
  showAddListForm: boolean = false;

  constructor(
    private jobListService: JobListService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.jobListsData = this.jobListService.getJobLists();
    this.showAddForm = new Array(this.jobLists?.length).fill(false);
  }

  //add new
  openAddForm(index: number): void {
    this.showAddForm[index] = true;

    setTimeout(() => {
      this.scrollToBottom(index);
    });
  }

  scrollToBottom(index: number): void {
    const listElements = this.jobLists.toArray();
    if (listElements[index]) {
      const listElement = listElements[index].nativeElement;
      listElement.scrollTop = listElement.scrollHeight;
    }
  }

  closeAddForm(index: number): void {
    this.showAddForm[index] = false;
  }

  openAddListForm(): void {
    this.showAddListForm = true;
  }

  closeAddListForm(): void {
    this.showAddListForm = false;
  }

  //kéo thả item
  drop(event: CdkDragDrop<string[]>) {
    const listElement = event.container.element.nativeElement;

    // Add the 'active' class if the list is empty before dropping
    if (event.container.data.length === 0) {
      listElement.classList.add('active');
    }

    // Handle the drop event
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    // Remove the 'active' class if the list is no longer empty after dropping
    if (event.container.data.length > 0) {
      listElement.classList.remove('active');
    }

    // Update the local storage
    this.jobListService.updateLocalStorage();
  }

  //di chuyển màn hình khi drog item
  onDragMoved(event: CdkDragMove<any>) {
    const scrollContainer = document.querySelector('.parent') as HTMLElement;
    const containerWidth = scrollContainer.clientWidth;
    const scrollLeft = scrollContainer.scrollLeft;
    const mouseX = event.pointerPosition.x;
    // Kiểm tra nếu con trỏ chuột gần bên trái hoặc bên phải của container thì cuộn
    const buffer = 100; //khoảng cách từ mép mà bắt đầu cuộn

    if (mouseX < scrollLeft + buffer) {
      scrollContainer.scrollLeft -= 20; // cuộn về bên trái
    } else if (mouseX > scrollLeft + containerWidth - buffer) {
      scrollContainer.scrollLeft += 20; // cuộn về bên phải

    }

  }

  deleteJob(listIndex: number, jobIndex: number) {
    const dialogRef = this.dialog.open(DialogConfirmDeleteComponent, {
      width: "20rem",
      data: {
        name: "job"
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jobListService.deleteJob(listIndex, jobIndex);
      }
    });
  }

  deleteList(listIndex: number) {
    const dialogRef = this.dialog.open(DialogConfirmDeleteComponent, {
      width: "20rem",
      data: { name: "list" },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jobListService.deleteList(listIndex);
      }
    });
  }

  //edit list name
  openEditListName(listId: number) {
    const list = this.jobListsData.find(list => list.id === listId);
    if (list) {
      //mở edit
      this.editListName = list.id;
      setTimeout(() => {
        this.editListNameInput.nativeElement.focus();
        this.editListNameInput.nativeElement.select();
      })
    }
  }

  saveListName(updateList: JobList) {
    this.jobListService.editListName(updateList);

    // đóng
    this.editListName = null;
  }

  // edit job name
  editJob(listIndex: number, jobIndex: number, event: MouseEvent) {
    const targetElement = event.currentTarget as HTMLElement;
    const rect = targetElement.getBoundingClientRect();
    const job = this.jobListsData[listIndex].jobs[jobIndex];

    const dialogRef = this.dialog.open(DialogConfirmEditComponent, {
      width: '15rem',

      data: {
        job: job
      },
      position: {
        top: `${rect.top - 8}px`,
        left: `${rect.left - 181}px`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.jobListService.editJobName(listIndex, jobIndex, result);
      }
    })
  }
}