import { Routes } from '@angular/router';


export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'gym_page',
        
    },
    {
        path: 'gym_page',
        loadChildren: () => import('./pages/gym_pages/gym_page.routes').then((routes) => routes.UserRoutes)
    },
];