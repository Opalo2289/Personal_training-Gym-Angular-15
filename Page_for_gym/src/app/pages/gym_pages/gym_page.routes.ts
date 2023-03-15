import { Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { TrainingPlansPageComponent } from './training-plans-page/training-plans-page.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

export const UserRoutes: Routes = [
    {path: '', title: 'JOWFIT COACH',  component: HomePageComponent},
    {path: 'servicios', title: 'Services',  component:  ServicesPageComponent},
    {path: 'entrenamiento', title: 'Training-plans',  component:  TrainingPlansPageComponent},
    {path: 'compras', title: 'Shopping',  component:  ShoppingPageComponent},
    {path: 'contacto', title: 'Contact',  component:  ContactPageComponent},
    {path: 'list', title: 'User List',  component:  UserListComponent},
    {path: 'add', title: 'User Add',  component:  UserAddComponent},
    {path: 'edit', title: 'User Edit', component: UserEditComponent}
] 