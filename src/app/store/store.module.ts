import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';


const routes: Routes = [
  { path: '', component: StoreComponent },
  {path:'product-details/:id', component: StoreComponent}
];

@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StoreModule { }
