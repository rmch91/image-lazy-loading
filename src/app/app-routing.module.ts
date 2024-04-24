import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Listing1Component } from './listing1/listing1.component';
import { Listing2Component } from './listing2/listing2.component';
import { Listing3Component } from './listing3/listing3.component';

const routes: Routes = [
  { path: 'listing1', component: Listing1Component },
  { path: 'listing2', component: Listing2Component },
  { path: 'listing3', component: Listing3Component },
  { path: '', redirectTo: '/listing1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
