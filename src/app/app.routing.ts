import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddcountryComponent } from './addcountry/addcountry.component';
import { AllcountriesComponent } from './allcountries/allcountries.component';

const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'addcountry', component: AddcountryComponent},
    { path: 'allcountries', component: AllcountriesComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
