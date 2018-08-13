import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ListadoPagosComponent } from './components/listado-pagos/listado-pagos.component';
 

const APP_ROUTES: Routes = 
[
    { 
        path: 'principal', 
        component: PrincipalComponent 
    },
    { 
        path: 'historial/:id', 
        component: ListadoPagosComponent

    },
    { 
        path: '**', 
        pathMatch: 'full', 
        redirectTo: 'principal' 
    }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES, {'useHash': true});