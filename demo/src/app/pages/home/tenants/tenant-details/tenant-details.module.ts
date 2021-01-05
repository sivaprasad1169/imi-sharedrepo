import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantDetailsComponent } from './tenant-details.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [TenantDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TenantDetailsComponent
      }
    ])
  ]
})
export class TenantDetailsModule { }
