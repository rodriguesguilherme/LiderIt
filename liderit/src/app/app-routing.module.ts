import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDogsComponent } from './list-dogs/list-dogs.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';


const routes: Routes = [
  { path: '', component: ListDogsComponent },
  { path: 'dog-detail/:dogName', component: DogDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
