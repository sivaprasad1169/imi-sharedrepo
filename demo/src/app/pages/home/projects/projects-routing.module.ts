import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./projects-lookup/project-lookup.module').then(m => m.ProjectLookupModule)
  },
  {
    path: ':project-id',
    loadChildren: () => import('./project-details/project-details.module').then(m => m.ProjectDetailsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule {
}
