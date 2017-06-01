import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
