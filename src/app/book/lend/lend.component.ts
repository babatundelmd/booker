import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/core/book.service';

@Component({
  selector: 'app-lend',
  templateUrl: './lend.component.html',
  styleUrls: ['./lend.component.scss'],
})
export class LendComponent implements OnInit {
  FormData: FormGroup;

  constructor(
    private builder: FormBuilder,
    private book: BookService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl(''),
      bookTitle: new FormControl(''),
      bookAuthor: new FormControl(''),
      lendingDate: new FormControl(''),
      returnDate: new FormControl(''),
    });
  }

  reset() {
    this.FormData = this.builder.group({
      name: new FormControl(''),
      bookTitle: new FormControl(''),
      bookAuthor: new FormControl(''),
      lendingDate: new FormControl(''),
      returnDate: new FormControl(''),
    });
  }

  onSubmit(formData) {
    this.book.lendBook(formData).subscribe((res) => {
      this.toastr.success('Successful 💃');
      setTimeout(() => {
        this.reset();
      }, 2000);
    });
  }
}
