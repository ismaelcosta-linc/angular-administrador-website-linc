import { Component, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeAdministradorComponent } from "./view/layout/sidebar/pages/home-administrador/home-administrador.component";
import { LoginComponent } from "./view/login/login.component";

const app_routes: Routes = [
    {path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(app_routes);