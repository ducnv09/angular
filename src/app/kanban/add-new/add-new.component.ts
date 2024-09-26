import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { JobListService } from '../job-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.css'
})
export class AddNewComponent implements AfterViewInit {
  @Input() placeholder: string;
  @Input() listIndex: number;
  @Output() formClosed = new EventEmitter<void>();
  @ViewChild('textarea') textareaRef: ElementRef<HTMLTextAreaElement>;
  @ViewChild('form', { static: false }) formRef: ElementRef;

  input: string = "";

  //  isFormVisible: boolean = false;

  constructor(
    private jobListService: JobListService,
    private snackBar: MatSnackBar
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.textareaRef.nativeElement.focus();
    });
  }

  @HostListener('document:mousedown', ['$event'])
  clickOutside(event:Event) {
    if (!this.formRef.nativeElement.contains(event.target)) {
      if (this.input.trim()) {
        this.addNew();
      } else {
        this.cancel();
      }
    }
  }

  // toggleForm(): void {
  //   this.isFormVisible = true;

  //   setTimeout(() => {
  //     this.textareaRef.nativeElement.focus();

  //     // Cuộn đến cuối của list
  //     const containerElement = this.formRef.nativeElement.closest('.container');
  //     if (containerElement) {
  //       // Tìm phần tử .list trong container
  //       const listElement = containerElement.querySelector('.list');
  //       if (listElement) {
  //         // Cuộn đến cuối của list
  //         listElement.scrollTop = listElement.scrollHeight;
  //       }
  //     }
  //   }, 0);
  // }

  // closeForm(): void {
  //   this.isFormVisible = false;
  //   this.input = '';
  // }

  addNew() {
    //không cho add nếu không có list hoặc job không có name
    if (this.input.trim()) {
      //add list
      if (this.listIndex === undefined) {

        this.jobListService.addNewList(this.input);
        this.snackBar.open("New List was created successfully!", "Dismiss", {
          duration: 2000,
        });
      }
      //add job
      else {
        this.jobListService.addNewJob(this.listIndex, this.input);
        this.snackBar.open("New Job was created successfully!", "Dismiss", {
          duration: 2000,
        });
      }

      this.resetForm();
      this.formClosed.emit();

      // // Reset the textarea height after adding the item
      // const textarea = this.textareaRef.nativeElement;
      // if (textarea) {
      //   textarea.value = '';
      //   textarea.style.height = 'auto';
      // }

      // //xóa trường nhập vào khi add xong
      // this.input = "";  

      // //tắt add
      // this.closeForm();
    }
  }

  cancel() {
    this.resetForm();
    this.formClosed.emit();
  }

  resetForm() {
    this.input = "";
    if (this.textareaRef) {
      const textarea = this.textareaRef.nativeElement;
      textarea.style.height = 'auto';
    }
  }

  adjustTextareaHeight(event: any): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = '83px'; // Reset height to auto to correctly calculate scrollHeight

    const maxHeight = 150;
    const newHeight = textarea.scrollHeight;

    if (newHeight <= maxHeight) {
      textarea.style.height = newHeight + 'px';
      textarea.style.overflowY = 'hidden';
    } else {
      textarea.style.height = maxHeight + 'px';
      textarea.style.overflowY = 'auto';
    }
  }
}
