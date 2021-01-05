import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LookupComponent} from "./lookup.component";
import {RouterModule} from "@angular/router";
import { StoreModule } from '@ngrx/store';
import {recordsReducer} from "./common/store-helper";



@NgModule({
  declarations: [
    LookupComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('records', recordsReducer),
    RouterModule.forChild([
      {
        path: '',
        component: LookupComponent
      }
    ])
  ]
})
export class ProjectLookupModule { }
