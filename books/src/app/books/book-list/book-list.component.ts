import { Component, OnInit } from '@angular/core';

import { Book } from '../../models/book';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book;

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    console.log(this.bookService);

    this.bookService.getBooks().subscribe(books => {
      console.log('books from observable', books);
      this.books = books;
    });
  }

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

    this.bookService.createBook(book).subscribe(createdBook => {
      console.log('created book', createdBook);
      // this.books.push(createdBook);

      this.books = [...this.books, createdBook];
    });

    // this.books.push(book);
  }

  onDelete(id: number) {
    console.log('deleting book');

    this.bookService.deleteBook(id).subscribe(deletedBook => {
      this.books = this.books.filter(book => book._id !== deletedBook._id);
    });
  }

  onEvent(event: Event) {
    console.log('eventing....');

    event.stopPropagation();
  }
}
