import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LevelComponent } from './level/level.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InscriptionPageComponent } from './inscription/inscription-page/inscription-page.component';

export const routes: Routes = [
    {
        path: 'home',
        component: DashboardComponent
    },
    {
        path: 'inscription',
        component: InscriptionPageComponent
    },
    {
        path: 'students-list',
        component: StudentsListComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'contact-us',
        component:ContactUsComponent
    }
];
