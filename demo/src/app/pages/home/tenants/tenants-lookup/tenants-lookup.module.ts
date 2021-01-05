import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {TenantsLookupComponent} from "./tenants-lookup.component";



@NgModule({
  declarations: [TenantsLookupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TenantsLookupComponent
      }
    ])
  ]
})
export class TenantsLookupModule { }
