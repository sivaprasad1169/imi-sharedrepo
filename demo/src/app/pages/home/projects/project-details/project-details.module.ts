import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { ScopesComponent } from './scopes/scopes.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [ DetailsComponent, ScopesComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailsComponent
      }
    ])
  ]
})
export class ProjectDetailsModule { }
