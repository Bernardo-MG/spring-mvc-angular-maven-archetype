import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataViewSearchComponent } from './data-view/data-view-search/data-view-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' },
  { path: 'data', component: DataViewSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
