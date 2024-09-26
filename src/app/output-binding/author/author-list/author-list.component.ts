import { Component } from '@angular/core';
import { Author, authors } from 'app/output-binding/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css'
})
export class AuthorListComponent {
 authors = authors;
 currentAuthor = authors[0];

 onSelected(selectedAuthor: Author) {
  this.currentAuthor = selectedAuthor;
 }

 onDelete(id: number) {
  this.authors = this.authors.filter(author => {
    return author.id !== id;
  });

  if (this.currentAuthor.id === id) {
    this.currentAuthor = this.authors[0];
  }
 }
}
