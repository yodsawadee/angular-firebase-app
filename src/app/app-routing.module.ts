import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Component/add/add.component';
import { ListComponent } from './Component/list/list.component';
import { UpdateComponent } from './Component/update/update.component';

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'add', component: AddComponent},
  { path: 'update/:id', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
