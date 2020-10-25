import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from './data-view/data-list/data-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' },
  { path: 'data', component: DataListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
