import { Component } from '@angular/core';

import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';
  book = new Book();

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('submitting form', this.book);
  }
}
