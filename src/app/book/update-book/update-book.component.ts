import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/core/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss'],
})
export class UpdateBookComponent implements OnInit {
  FormData: FormGroup;
  isloading;
  book$;
  id;

  constructor(
    private builder: FormBuilder,
    private book: BookService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.book.getBook(this.id).subscribe((res) => {
        this.book$ = res;
        this.FormData.patchValue(this.updateFormValues());
      });
    });
    this.FormData = this.builder.group({
      author: new FormControl(''),
      country: new FormControl(''),
      language: new FormControl(''),
      pages: new FormControl(''),
      title: new FormControl(''),
      year: new FormControl(''),
    });
  }

  onSubmit(formData) {
    this.book.updateBook(this.id, formData).subscribe((res) => {
      this.toastr.success('Updated 🙌');
      setTimeout(() => {
       location.href = '/'
      }, 2000);
    });
  }

  updateFormValues() {
    return {
      author: this.book$.author,
      country: this.book$.country,
      language: this.book$.language,
      pages: this.book$.pages,
      title: this.book$.title,
      year: this.book$.year,
    };
  }
}
