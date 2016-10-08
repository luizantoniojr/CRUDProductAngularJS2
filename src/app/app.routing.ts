import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CreateProduct } from './pages/product/create/create-product';
import { ReadProduct } from './pages/product/read/read-product';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product/create', component: CreateProduct },
    { path: 'product/read', component: ReadProduct }
    // { path: 'product/read/:tag', component: CourseDetailsComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);