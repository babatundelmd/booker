import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './book/add-book/add-book.component';
import { BookComponent } from './book/book.component';
import { LendComponent } from './book/lend/lend.component';
import { UpdateBookComponent } from './book/update-book/update-book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    pathMatch: 'full',
  },

  {
    path: 'add-book',
    component: AddBookComponent,
  },
  {
    path: 'update/:id',
    component: UpdateBookComponent,
  },

  {
    path: 'lend',
    component: LendComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
