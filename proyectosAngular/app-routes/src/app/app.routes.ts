import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/views/home-page/home-page.component';
import { AuthPageComponent } from './modules/auth/views/auth-page/auth-page.component';
import { SidebarPageComponent } from './modules/sidebar/views/sidebar-page/sidebar-page.component';

export const routes: Routes = [
    {
        path:'',
        component: HomePageComponent
    },
    {
        path:'Auth', //mostrar la pagina completa de autenticacion
        component: AuthPageComponent
    },
    {
        path:'sidebar', //mostrar la pagina completa de autenticacion
        component: SidebarPageComponent
    }

];
