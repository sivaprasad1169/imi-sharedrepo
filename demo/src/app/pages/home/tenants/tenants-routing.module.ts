import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tenants-lookup/tenants-lookup.module').then(m => m.TenantsLookupModule)
  },
  {
    path: ':tenant-id',
    loadChildren: () => import('./tenant-details/tenant-details.module').then(m => m.TenantDetailsModule)
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
export class TenantsRoutingModule {
}
