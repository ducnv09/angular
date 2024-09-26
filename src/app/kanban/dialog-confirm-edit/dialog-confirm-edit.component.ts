import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm-edit',
  templateUrl: './dialog-confirm-edit.component.html',
  styleUrl: './dialog-confirm-edit.component.css'
})
export class DialogConfirmEditComponent implements OnInit {
  @ViewChild('jobInput') jobInput!: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      job: string
    }
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.jobInput.nativeElement.focus();
      this.jobInput.nativeElement.select();
    }, 0)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}