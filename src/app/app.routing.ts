import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CreateProduct } from './pages/product/create/create-product';
import { ReadProduct } from './pages/product/read/read-product';
import { UpdateProduct } from './pages/product/update/update-product';
import { DeleteProduct } from './pages/product/delete/delete-product';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product/create', component: CreateProduct },
    { path: 'product/read', component: ReadProduct },
    { path: 'product/update/:tag', component: UpdateProduct },
    { path: 'product/delete/:tag', component: DeleteProduct }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);