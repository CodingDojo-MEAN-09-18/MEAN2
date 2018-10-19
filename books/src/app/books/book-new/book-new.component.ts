import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../../models/book';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  book = new Book();

  @Output()
  createBook = new EventEmitter<Book>();

  constructor() {}

  ngOnInit() {}
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', form.value);

    // this.books.push(form.value);

    this.createBook.emit(form.value);

    this.book = new Book();

    // console.log('books', this.books);

    form.reset();
  }
}
