import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableModule } from "./custom-table/custom-table.module";
import { LoaderModule } from "./loader/loader.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CustomTableModule,
    LoaderModule
  ]
})
export class SharedModule { }
