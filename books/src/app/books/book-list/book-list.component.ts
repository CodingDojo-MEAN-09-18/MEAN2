import { Component, OnInit } from '@angular/core';

import { BOOKS } from '../../data/book-data';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = BOOKS;
  selectedBook: Book;

  constructor() {}

  ngOnInit() {}

  onSelect(book: Book): void {
    console.log('selecting ', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  onCreate(book: Book): void {
    console.log('creatnig book', book);

    this.books.push(book);
  }
}
