import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglecarComponent } from './singlecar/singlecar.component';

const routes: Routes = [
  {path: 'car/:id', component: SinglecarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
