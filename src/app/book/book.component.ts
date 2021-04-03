import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/core/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  public books$;
  search: any = '';
  constructor(
    private book: BookService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.book.getBooks().subscribe((res) => {
      this.books$ = res;
    });
  }

  onDelete(id) {
    this.book.deleteBook(id).subscribe((res) => {
      this.toastr.success('Deleted ');
      setTimeout(() => {
        location.reload();
      }, 2000);
    });
  }

  onUpdate(id) {
    this.router.navigate([`/update/${id}`]);
  }

  // onKey() {
  //   const searching = this.books$.filter(
  //     (res) => {
  //       !this.search ||
  //       res.author.toLocaleLowerCase().includes(this.search.toLowerCase())
  //     });
  //   this.search.length > 2 ? (this.books$ = searching) : this.getAllBooks();
  // }
}
