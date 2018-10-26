import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { map, switchMap } from 'rxjs/operators';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  @Input()
  book: Book;

  constructor(
    private readonly bookService: BookService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   const bookId = params.get('book_id');

    //   this.bookService.getBook(bookId).subscribe(book => (this.book = book));
    // });

    this.route.paramMap
      .pipe(
        map(params => params.get('book_id')),
        switchMap(bookId => this.bookService.getBook(bookId))
      )
      .subscribe(book => (this.book = book));
  }
}
