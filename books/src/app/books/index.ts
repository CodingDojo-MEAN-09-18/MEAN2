import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';

export const components: any[] = [
  BookNewComponent,
  BookListComponent,
  BookDetailComponent,
];

export * from './book-new/book-new.component';
export * from './book-list/book-list.component';
export * from './book-detail/book-detail.component';
