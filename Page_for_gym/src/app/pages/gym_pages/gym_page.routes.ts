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
    {path: '', title: 'Home Page',  component: HomePageComponent},
    {path: 'services', title: 'Services',  component:  ServicesPageComponent},
    {path: 'training', title: 'Training-plans',  component:  TrainingPlansPageComponent},
    {path: 'shopping', title: 'Shopping',  component:  ShoppingPageComponent},
    {path: 'contact', title: 'Contact',  component:  ContactPageComponent},
    {path: 'list', title: 'User List',  component:  UserListComponent},
    {path: 'add', title: 'User Add',  component:  UserAddComponent},
    {path: 'edit', title: 'User Edit', component: UserEditComponent}
] 