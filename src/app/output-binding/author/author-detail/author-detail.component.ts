import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from 'app/output-binding/author';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent {
  @Input() author: Author
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>(); // truyền loại của id vào
}
