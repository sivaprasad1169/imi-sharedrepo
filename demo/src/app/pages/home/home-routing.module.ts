import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuardService, } from '../../core/guards';
import {PrivilegeGuardService} from '../../core/guards';
import {PRIVILEGE_CONSTANTS} from "../../core/constants";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                redirectTo: 'tenants',
                pathMatch: 'full'
            },
            {
                path: 'tenants',
                loadChildren: () => import('./tenants/tenants.module').then(m => m.TenantsModule),
                canActivate: [PrivilegeGuardService],
                data: { priv_id: PRIVILEGE_CONSTANTS.LOOKUP_PAGE }
            },
            {
                path: 'projects',
                loadChildren: () => import('./projects/project-details/project-details.module').then(m => m.ProjectDetailsModule),
                canActivate: [PrivilegeGuardService],
                data: { priv_id:  PRIVILEGE_CONSTANTS.DETAILS_PAGE }
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {
}
